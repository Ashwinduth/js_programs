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
    function passedstudents(){
        var std=students.filter(function(val,index){
            return val.marks>=35;
        });
        console.log(std);
    } 
    passedstudents()
</script>
