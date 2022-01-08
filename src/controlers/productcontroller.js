exports.getProduct = async (req,res)=>{
    res.send("-get all products");
};

exports.getProductById = async (req,res)=>{
    res.send("- get product from id =" + req.params.id);
};

exports.getProductByIdName = async (req,res)=>{
    res.send("- get product by name =" + req.params.name)
};

exports.getProductByIdPrice = async (req,res)=>{
    res.send("- get product by price =" + req.params.price)
};

exports.addProduct = async (req,res)=>{
    console.log(req.body.id);
    console.log(req.body.name);
    res.send("at a product id= " + req.body.id + " name :" + req.body.name);
};