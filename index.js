import express from "express"

const app = express();

app.use(express.json());

const db = [{
    id: 1,
    title: 'Idli',
    price: 15,
    category: 'Breakfast'
},
{
    id: 2,
    title: 'Biryani',
    price: 100,
    category: 'Lunch'
},
{
    id: 3,
    title: 'Jamun',
    price: 55,
    category: 'Deasert'
}

];
// get all items
app.get('/all-food-items', (req, res) => {
    res.json({
        success: true,
        data: db,
        message: 'All food item fetched successfully'

    })
})


//  add naew item
app.post('/add-food-item', (req, res) => {
    // const id = req.body.id;
    // const title = req.body.title;
    // const price = req.body.price;
    // const category  = req.body.category;OR

    const { id, title, price, category } = req.body

    const newItem = {
        id: id,
        title: title,
        price: price,
        category: category
    }

    // check if food item already exists with the same id
    db.forEach((item) => {
        if (item.id === id) {
            return res.json({
                success: false,
                data: null,
                message: 'food item already exists'
            })
        }
    })

    db.push(newItem);

    res.json({
        success: true,
        data: newItem,
        message: 'New item added successfully'
    })
})


app.get('/food-item-by-id', (req, res) => {
    //read id from query params
    const id = req.query.id
    db.forEach((item) => {
        if (item.id == id) {
            return res.json({
                success: true,
                data: item,
                message: 'food fetch successfully'
            })
        }
    })
})


app.get('/delete-food-item-by-id', (req, res) => {
    const id = req.query.id

    db.forEach((item, index)=>{
        if (item.id == id) {
            db.splice(index, 1)
            return res.json({
                success: true,
                data: db,
                message: 'food item deleted successfully '
            })
        }
    })
    res.json({
        success: false,
        data: null,
        message: 'food item deleted successfully '
    })
})


app.listen(5000, () => {
    console.log("server is running on port 5000")
})