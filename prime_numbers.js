<script>
var n,i,count;
for(n=1;n<=10;n++)
{
	count=0;
	for(i=1;i<=n;i++) 
	{
	  if(n%i==0)
	 {
		 count++;
	 }
	}
if(count==2)
{
	console.log(n)
}
}
</script>
