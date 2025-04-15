<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Editable Table</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div id="edit-table" class="table-editable">
            <span class="table-add float-end mb-3 me-2">
              <button class="btn btn-sm btn-success-subtle" @click="addRow"><i class="ri-add-fill"><span
                    class="ps-1">Add
                    New</span></i>
              </button>
            </span>
            <div class="table-responsive w-100 mb-0">
              <table class="table table-bordered table-striped text-center mb-3">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Company Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Sort</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in rows" :key="index">
                    <td contenteditable="true">{{ row.name }}</td>
                    <td contenteditable="true">{{ row.age }}</td>
                    <td contenteditable="true">{{ row.companyName }}</td>
                    <td contenteditable="true">{{ row.country }}</td>
                    <td contenteditable="true">{{ row.city }}</td>
                    <td>
                      <span class="table-up"><a href="#!" class="indigo-text" @click="moveRowUp(index)"><i
                            class="fa fa-long-arrow-up" aria-hidden="true"></i></a></span>{{ "" }}
                      <span class="table-down"><a href="#!" class="indigo-text" @click="moveRowDown(index)"><i
                            class="fa fa-long-arrow-down" aria-hidden="true"></i></a></span>
                    </td>
                    <td>
                      <span class="table-remove">
                        <button @click="removeRow(index)" type="button" class="btn btn-danger-subtle btn-sm my-0">
                          Remove
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { reactive, ref } from 'vue';

const rows = reactive([
  {
    name: 'Gio Metric',
    age: '25',
    companyName: 'Deepends',
    country: 'Spain',
    city: 'Madrid'
  },
  {
    name: 'Manny Petty',
    age: '45',
    companyName: 'Insectus',
    country: 'France',
    city: 'San Francisco'
  },
  {
    name: 'Lucy Tania',
    age: '26',
    companyName: 'Isotronic',
    country: 'Germany',
    city: 'Frankfurt am Main'
  },
  { name: 'Anna Mull', age: 35, companyName: 'Portica', country: 'USA', city: 'Oregon' }
]);

const addRow = () => {
  rows.push(rows[3])
};

const removeRow = (index) => {
  rows.splice(index, 1);
};

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4']); // Sample data

const moveRowUp = (index) => {
  if (index > 0) {
    const temp = rows[index];
    rows[index] = rows[index - 1];
    rows[index - 1] = temp;
  }
};

const moveRowDown = (index) => {
  if (index < rows.length - 1) {
    const temp = rows[index];
    rows[index] = rows[index + 1];
    rows[index + 1] = temp;
  }
};
</script>
