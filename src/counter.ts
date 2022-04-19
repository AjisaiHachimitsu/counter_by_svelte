export default class Counter1{
  title:string;
  private count:number=0;
  get Count (){return this.count;}
  constructor(title :string="")
  {
    this.title=title;
  }

  IncreaseCount()
  {
    this.count++;
  }
  DecreaseCount()
  {
    if(this.count>=1)
    {
      this.count--;
    }
  }
  ResetCount()
  {
    this.count=0;
  }

  static Sum(counters:Readonly<Counter1>[])
  {
    let sum=0;
    for(let i=0;i<counters.length;i++)
    {
      sum+=counters[i].Count;
    }
    return sum;
  }
}
