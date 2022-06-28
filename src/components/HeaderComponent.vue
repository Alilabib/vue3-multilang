<template>
    <nav class="container mb-4 mt-4">
        <div class="row">
            <div class="col-9">
            </div>
            <div class="col-3">
                <select class="custom-select" v-model="lang"  @change="handelChange($event)">
                   <option value="en">English</option>
                   <option value="de">Deutsch</option>
                    <option value="ar">عربي</option>
                </select>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:'HeaderComponent',
    data(){
        return {
            lang : localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'en',
               
        }
    },
    'methods':{
        handelChange(event){
            localStorage.setItem('lang',event.target.value);
            window.location.reload();
        }
    }
}
</script>