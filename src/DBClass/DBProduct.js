
export default class DBProduct {
    id = 0;
    product_name = "";
    gtin_number = "";
    ingredients = "";
    image_url = [];
    body_part_category = "";
    source = [];

    constructor(_id) 
    {
        this.id=_id;
        this.product_name="Name";
        
    };

    showProductInfo()
    {
        console.log("id "+this.id);
        console.log("product_name "+this.product_name);
    }

}