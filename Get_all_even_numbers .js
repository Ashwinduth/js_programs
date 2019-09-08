<script>
    var even =[10,31,42,68,21,102,101,1002,1003,1004];
    function evennumber(){
        var number=even.filter(function(val,index){
            return val%2==0;
        });
        console.log(number);
    }
    evennumber()
</script>
