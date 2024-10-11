class Category {
    id;
    title;
    color;
    static id: any;
    constructor(id: string, title: string, color: string) {
      this.id = id;
      this.title = title;
      this.color = color;
    }
  }
  
  export default Category;