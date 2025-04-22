<template>

  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <h4 class="mb-0">Bootstrap Datatable</h4>
        </b-card-header>
        <b-card-body>
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>.
            <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales
            with
            the parent element.
          </p>
          <div class="table-responsive mb-0">
            <table id="datatable" ref="tableRef" class="table dataTable" data-toggle="data-table">
              <tfoot>
                <tr>
                  <th rowspan="1" colspan="1">Name</th>
                  <th rowspan="1" colspan="1">Position</th>
                  <th rowspan="1" colspan="1">Office</th>
                  <th rowspan="1" colspan="1">Age</th>
                  <th rowspan="1" colspan="1">Start date</th>
                  <th rowspan="1" colspan="1">Salary</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <!-- Column Hidden Datatable -->
  <b-row>
    <b-col sm="12">
      <div class="card">
        <b-card-header class="mb-0 d-flex justify-content-between">
          <h4 class="mb-0">Column Hidden Datatable</h4>
        </b-card-header>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>.
            <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales
            with
            the parent element.
          </p>
          <div class="table-responsive mb-0">
            <div class="mb-3">
              Toggle column: <a class="toggle-vis btn btn-outline-primary mb-1" data-column="0">Name</a> - <a
                class="toggle-vis btn btn-outline-primary mb-1" data-column="1">Position</a> - <a
                class="toggle-vis btn btn-outline-primary mb-1" data-column="2">Office</a> - <a
                class="toggle-vis btn btn-outline-primary mb-1" data-column="3">Age</a> - <a
                class="toggle-vis btn btn-outline-primary mb-1" data-column="4">Start date</a> -
              <a class="toggle-vis btn btn-outline-primary mb-1" data-column="5">Salary</a>
            </div>
            <table id="datatable" ref="columnTableRef" class="table dataTable" data-toggle="data-table"></table>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
  <!-- Input Search Datatable-->
  <b-row>
    <b-col sm="12">
      <div class="card">
        <b-card-header class="mb-0 d-flex justify-content-between">
          <h4 class="mb-0">Input Search Datatable</h4>
        </b-card-header>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>.
            <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales
            with
            the parent element.
          </p>
          <div class="table-responsive mb-0">
            <table id="datatable" ref="inputTableRef" class="table dataTable" data-toggle="data-table">
              <tfoot>
                <tr class="filters">
                  <th title="Name">Name</th>
                  <th title="Position">Position</th>
                  <th title="Office">Office</th>
                  <th title="Age">Age</th>
                  <th title="Start date">Start date</th>
                  <th title="Salary">Salary</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
  <!-- Multi-language Datatable -->
  <b-row>
    <b-col sm="12">
      <div class="card">
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Multi-language Datatable</h4>
          </div>
        </b-card-header>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>.
            <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it
            scales
            with
            the parent element.
          </p>
          <div class="table-responsive mb-0">
            <select id="langSelector" class="form-control mb-3">
              <option id="german" value="german" data-path="/vendor/language/german.json">German</option>
              <option id="french" value="french" data-path="/vendor/language/french.json">French</option>
              <option id="hindi" value="hindi" data-path="/vendor/language/hindi.json">Hindi</option>
              <option id="japanase" value="japanase" data-path="/vendor/language/japanese.json">Japanese</option>
              <option id="english" value="eng" data-path="/vendor/language/english.json">English</option>
            </select>
            <table id="datatable" ref="langTableRef" class="table dataTable" data-toggle="data-table">
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>

</template>
<script setup>
import { ref } from 'vue'
import useDataTable from '../../../hooks/useDatatable.js'

const tableData = ref([
  { Name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_Date: '2011/04/25', salary: '$320,800' },
  { Name: 'Garrett Winters', position: 'Skin Specialist', office: 'Tokyo', age: 63, start_Date: '2011/07/25', salary: '$170,750' },
  { Name: 'Olivia Wilson', position: 'Laboratorian', office: 'San Francisco', age: 66, start_Date: '2009/01/12', salary: '$86,000' },
  { Name: 'Cedric Kelly', position: 'Orthopedics', office: 'Edinburgh', age: 22, start_Date: '2012/03/29', salary: '$433,060' },
  { Name: 'Amine Louis', position: 'Skin Specialist', office: 'Tokyo', age: 33, start_Date: '2008/11/28', salary: '$162,700' },
  { Name: 'Ethan Rodriguez', position: 'ENT Specialist', office: 'New York', age: 61, start_Date: '2012/12/02', salary: '$372,000' },
  { Name: 'Herrod Chandler', position: 'Eye Specialist', office: 'San Francisco', age: 59, start_Date: '2012/08/06', salary: '$137,500' },
  { Name: 'Rhona Davidson', position: 'ENT Specialist', office: 'Tokyo', age: 55, start_Date: '2010/10/14', salary: '$327,900' },
  { Name: 'Colleen Hurst', position: 'Fertility Specialist', office: 'San Francisco', age: 39, start_Date: '2009/09/15', salary: '$205,500' },
  { Name: 'Sonya Frost', position: 'Cardiologist', office: 'Edinburgh', age: 23, start_Date: '2008/12/13', salary: '$103,600' },
  { Name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, start_Date: '2008/12/19', salary: '$90,560' },
  { Name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, start_Date: '2013/03/03', salary: '$342,000' },
  { Name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, start_Date: '2008/10/16', salary: '$470,600' },
  { Name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, start_Date: '2012/12/18', salary: '$313,500' },
  { Name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, start_Date: '2010/03/17', salary: '$385,750' },
  { Name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: 66, start_Date: '2012/11/27', salary: '$198,500' },
  { Name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 64, start_Date: '2010/06/09', salary: '$725,000' },
  { Name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: 59, start_Date: '2009/04/10', salary: '$237,500' },
  { Name: 'Emily Thompson', position: 'Cardiologist', office: 'London', age: 41, start_Date: '2012/10/13', salary: '$132,000' },
  { Name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: 35, start_Date: '2012/09/26', salary: '$217,500' },
  { Name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: 30, start_Date: '2011/09/03', salary: '$345,000' },
  { Name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, start_Date: '2009/06/25', salary: '$675,000' },
  { Name: 'Matthew Anderson', position: 'Pediatricians', office: 'New York', age: 21, start_Date: '2011/12/12', salary: '$106,450' },
  { Name: 'Doris Wilder', position: 'Eye Specialist', office: 'Sydney', age: 23, start_Date: '2010/09/20', salary: '$85,600' },
  { Name: 'Alexandra Johnson', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, start_Date: '2009/10/09', salary: '$1,200,000' },
  { Name: 'Gavin Joyce', position: 'General Checkup', office: 'Edinburgh', age: 42, start_Date: '2010/12/22', salary: '$92,575' },
  { Name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', age: 28, start_Date: '2010/11/14', salary: '$357,650' },
  { Name: 'Christopher Martinezr', position: 'Cardiologist', office: 'San Francisco', age: 28, start_Date: '2011/06/07', salary: '$206,850' },
  { Name: 'Fiona Green', position: 'Chief Operating Officer (COO)', office: 'San Francisco', age: 48, start_Date: '2010/03/11', salary: '$850,000' },
  { Name: 'Shou Itou', position: 'Regional Marketing', office: 'Tokyo', age: 20, start_Date: '2011/08/14', salary: '$163,000' },
  { Name: 'Michelle House', position: 'ENT Specialist', office: 'Sydney', age: 37, start_Date: '2011/06/02', salary: '$95,400' },
  { Name: 'Suki Burks', position: 'General Checkup', office: 'London', age: 53, start_Date: '2009/10/22', salary: '$114,500' },
  { Name: 'Prescott Bartlett', position: 'Technical Author', office: 'London', age: 27, start_Date: '2011/05/07', salary: '$145,000' },
  { Name: 'Gavin Cortez', position: 'Team Leader', office: 'San Francisco', age: 22, start_Date: '2008/10/26', salary: '$235,500' },
  { Name: 'Martena Mccray', position: 'Post-Sales support', office: 'Edinburgh', age: 46, start_Date: '2011/03/09', salary: '$324,050' },
  { Name: 'Unity Butler', position: 'Marketing Designer', office: 'San Francisco', age: 47, start_Date: '2009/12/09', salary: '$85,675' },
  { Name: 'Howard Hatfield', position: 'Office Manager', office: 'San Francisco', age: 51, start_Date: '2008/12/16', salary: '$164,500' },
  { Name: 'Hope Fuentes', position: 'Secretary', office: 'San Francisco', age: 41, start_Date: '2010/02/12', salary: '$109,850' },
  { Name: 'Vivian Harrell', position: 'Financial Controller', office: 'San Francisco', age: 62, start_Date: '2009/02/14', salary: '$452,500' },
  { Name: 'Timothy Mooney', position: 'Office Manager', office: 'London', age: 37, start_Date: '2008/12/11', salary: '$136,200' },
  { Name: 'Jackson Bradshaw', position: 'Director', office: 'New York', age: 65, start_Date: '2008/09/26', salary: '$645,750' },
  { Name: 'Olivia Liang', position: 'Dentist', office: 'Singapore', age: 64, start_Date: '2011/02/03', salary: '$234,500' },
  { Name: 'Samantha Taylor', position: 'Cardiologist', office: 'London', age: 38, start_Date: '2011/05/03', salary: '$163,500' },
  { Name: 'Sakura Yamamoto', position: 'Dentist', office: 'Tokyo', age: 37, start_Date: '2009/08/19', salary: '$139,575' },
  { Name: 'Thor Walton', position: 'General Checkup', office: 'New York', age: 61, start_Date: '2009/09/30', salary: '$162,000' },
  { Name: 'Ana Trujillo', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 44, start_Date: '2012/01/29', salary: '$725,000' },
  { Name: 'Carlos Gonzales', position: 'Cardiologist', office: 'Tokyo', age: 40, start_Date: '2009/06/22', salary: '$178,000' },
  { Name: 'Carlos Frazier', position: 'Cardiologist', office: 'New York', age: 39, start_Date: '2010/07/12', salary: '$149,000' },
  { Name: 'Kaitlin Denny', position: 'Chief Executive Officer (CEO)', office: 'San Francisco', age: 43, start_Date: '2010/03/26', salary: '$600,000' },
  { Name: 'Lori Smith', position: 'General Checkup', office: 'Edinburgh', age: 49, start_Date: '2010/01/09', salary: '$120,000' },
  { Name: 'Annie Black', position: 'Regional Director', office: 'Singapore', age: 42, start_Date: '2011/05/13', salary: '$317,500' },
  { Name: 'Albert Castillo', position: 'Chief Financial Officer (CFO)', office: 'Tokyo', age: 43, start_Date: '2011/02/01', salary: '$240,000' },
  { Name: 'Bessie Wright', position: 'Senior Marketing Designer', office: 'New York', age: 56, start_Date: '2011/07/22', salary: '$225,000' },
  { Name: 'Ruthie Cook', position: 'Dentist', office: 'San Francisco', age: 56, start_Date: '2009/12/03', salary: '$135,000' }
]);

const columns = ref([
  { data: 'Name', title: ' Name' },
  { data: 'position', title: 'Position' },
  { data: 'office', title: 'Office' },
  { data: 'age', title: 'Age' },
  { data: 'start_Date', title: 'Start Date' },
  { data: 'salary', title: 'Salary' }
])

const tableRef = ref(null)
useDataTable({
  tableRef: tableRef,
  columns: columns.value,
  data: tableData.value
})

const columnTableRef = ref(null)
useDataTable({
  tableRef: columnTableRef,
  columns: columns.value,
  data: tableData.value,
  isColumnHidden: true,
  isColumnHiddenClass: '.toggle-vis'
})

const inputTableRef = ref(null)
useDataTable({
  tableRef: inputTableRef,
  columns: columns.value,
  data: tableData.value,
  isFilterColumn: true
})

const langTableRef = ref(null)
useDataTable({
  tableRef: langTableRef,
  columns: columns.value,
  data: tableData.value,
  isMultilang: true
})
</script>
