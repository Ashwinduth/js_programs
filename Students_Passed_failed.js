<script>
    var students=[
        {
            "id":1,
            "name":"Ashwin",
            "marks":80
        },
        {
            "id":2,
            "name":"Ashok",
            "marks":10

        },
        {
            "id":3,
            "name":"Hemanth",
            "marks":20

        },
        {
            "id":4,
            "name":"Loki",
            "marks":25

        },
        {
            "id":5,
            "name":"Prasad",
            "marks":35

        },
        {
            "id":6,
            "name":"Prashanth",
            "marks":70
        }
    ];    
    function passed_failed(){
           var std=students.every(function(val,index){
               if(val>30){
                   return true;
               }
               else{
                   return false;
               }
               
           });
           console.log(std);
       }
       passed_failed()
    
    
</script>
