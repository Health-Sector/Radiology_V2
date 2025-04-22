import os
import re

def fix_jwt_imports(directory):
    """
    Recursively process all Python files in a directory to replace 'import jwt' with 'from jose import jwt'.
    Also handles various other import patterns like 'import jwt, other_module'.
    """
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".py"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Check if the file contains 'import jwt' but not already 'from jose import jwt'
                    if re.search(r'\bimport\s+jwt\b', content) and not re.search(r'\bfrom\s+jose\s+import\s+jwt\b', content):
                        print(f"Processing {file_path}")
                        
                        # Replace 'import jwt' with 'from jose import jwt'
                        modified_content = re.sub(r'\bimport\s+jwt\b', 'from jose import jwt', content)
                        
                        # Handle cases like 'import jwt, other_module'
                        modified_content = re.sub(r'\bimport\s+jwt,\s+', 'from jose import jwt\nimport ', modified_content)
                        
                        # Write the modified content back to the file
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(modified_content)
                        
                        print(f"Updated {file_path}")
                    
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    # Process the main directory and backend directory
    fix_jwt_imports(".")
    print("Finished updating JWT imports.") 