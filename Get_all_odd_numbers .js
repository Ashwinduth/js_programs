<script>
    var odd =[10,31,42,68,21,102,101,1002,1003];
    function oddnumber(){
        var number=odd.filter(function(val,index){
            return val%2!==0;
        });
        console.log(number);
    }
    oddnumber()
</script>
