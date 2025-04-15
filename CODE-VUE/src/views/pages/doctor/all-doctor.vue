<template>
    <b-row>
        <b-col sm="12">
            <b-card no-body>
                <div class="card-header-custom d-flex justify-content-between p-4 mb-0">
                    <div class="header-title">
                        <b-card-title>Doctors List</b-card-title>
                    </div>
                </div>
            </b-card>
        </b-col>
        <DoctorList doctorName="Dr. Anna Mull" Specialists="Cardiologists" doctorImg="12.jpg" />
        <DoctorList doctorName="Dr. Paul Molive" Specialists="Heart Surgeons" doctorImg="13.jpg" />
        <DoctorList doctorName="Dr. Terry Aki" Specialists="Medicine Specialists" doctorImg="14.jpg" />
        <DoctorList doctorName="Dr. Poppa Cherry" Specialists="Family Physicians" doctorImg="15.jpg" />
        <DoctorList doctorName="Dr. Saul T. Balls" Specialists="Gynaecology" doctorImg="16.jpg" />
        <DoctorList doctorName="Dr. Hal Appeno" Specialists="MD" doctorImg="17.jpg" />
        <DoctorList doctorName="Dr. Polly Tech" Specialists="Eye Special" doctorImg="18.jpg" />
        <DoctorList doctorName="Dr. Pat Agonia" Specialists="Therapy Special" doctorImg="12.jpg" />
        <DoctorList doctorName="Dr. Barry Cade" Specialists="Heart Surgeons" doctorImg="13.jpg" />
        <DoctorList doctorName="Dr. Jimmy Changa" Specialists="Cardiologists" doctorImg="14.jpg" />
        <DoctorList doctorName="Dr. Sue Vaneer" Specialists="Orthopedics Special" doctorImg="15.jpg" />
        <DoctorList doctorName="Dr. Monty Carlo" Specialists="Anesthesiologists" doctorImg="16.jpg" />
        <DoctorList doctorName="Dr. Rick O'Shea" Specialists="General" doctorImg="17.jpg" />
        <DoctorList doctorName="Dr. Bunny Joy" Specialists="Gynaecology" doctorImg="18.jpg" />
        <DoctorList doctorName="Dr. Shonda Leer" Specialists="Orthopedics Special" doctorImg="12.jpg" />
        <DoctorList doctorName="Dr. Ira Membrit" Specialists="MD" doctorImg="13.jpg" />
    </b-row>
</template>
<script setup>
import DoctorList from '@/components/widget/doctor-list.vue';
</script>