#!/bin/bash

# Wait for database to be ready
echo "Waiting for database to be ready..."
until PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "\q" 2>/dev/null; do
    echo "Database not ready yet. Waiting..."
    sleep 2
done
echo "Database is ready."

# Check if rugrel table exists
if ! PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "SELECT to_regclass('public.rugrel');" | grep -q "rugrel"; then
    echo "Table 'rugrel' not found. Creating tables..."
    PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f /app/backend/init_db.sql
    echo "Tables created."
else
    echo "Table 'rugrel' already exists. Skipping initialization."
fi

# Check if there are users in the rugrel table
if PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "SELECT COUNT(*) FROM rugrel;" | grep -q "0"; then
    echo "No users found. Creating initial users..."
    PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f /app/backend/init_db.sql
fi

# Update passwords if needed
echo "Checking for password updates..."
if python /app/backend/update_password.py; then
    echo "Password update completed."
else
    echo "Password update skipped or failed."
fi

echo "Database initialization completed." 