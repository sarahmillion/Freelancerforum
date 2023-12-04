const spanCount = document.querySelector('spanCount');
const spanAverageCost = document.querySelector('#spanAverageCost');
const ul = document.querySelector('ul');

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" }
  ];

  const names = ["Dr. Slice","Dr. Pressure","Prof. Possibility","Prof. Prism","Dr. Impulse","Prof. Spark","Dr. Wire","Prof. Goose"
];
  const occupations = [
  "gardener","programmer","teacher","gardner"
];
  
  function render(){
   spanCount.innerHTML = freelancers.length;
  
  let sum = 0;
   freelancers.forEach((freelancer)=> {
   sum = sum + freelancer.price;
  });
  
   const average = sum / freelancers.length;
   spanAverageCost.innerHTML = average; 
  
   const html = freelancers.map ((freelancer)=> {
   return`
    <li>${freelancer.name} is ${freelancer.price} and occupation ${freelancer.occupation}
    </li>
  `;
  }).join('');


  ul.innerHTML = html;
}

render();

    setInterval(()=> {
      const nameIndex = Math.floor(Math.random()*names.length);
      const name = names[nameIndex];
      const price = Math.ceil(Math.random()*100);
      const occupationIndex = Math.floor(Math.random()*occupations.length);
      const color = color[colorIndex];
      const cost = Math.ceil(Math.random()*10);
      const randomFreelancer = {
          name: name,
          color: price, 
          occupation: occupations
      };
  
      freelancers.push(randomFreelancer);
  render();   
  if(freelancers.length === 15){
  clearInterval(interval);
  }
  }, 1000)
  






















  
 