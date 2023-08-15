const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens1',
                heading1: 'サンプルテキスト１－１',
                heading2: 'サンプルテキスト１－２',
                heading3: 'サンプルテキスト１－３',
                headingtext1: 'サンプルテキスト１　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプルテキスト文章１　サンプルテキスト文章　サンプルテキスト文章　',
                headingtext3: 'サンプルテキスト文章文章１　サンプルテキスト文章文章　サンプルテキスト文章文章　',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras2',
                heading1: 'サンプルテキスト２－１',
                heading2: 'サンプルテキスト２－２',
                heading3: 'サンプルテキスト２－３',
                headingtext1: 'サンプルテキスト２　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプルテキスト文章２　サンプルテキスト文章　サンプルテキスト文章　',
                headingtext3: 'サンプルテキスト文章文章２　サンプルテキスト文章文章　サンプルテキスト文章文章　',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'A great phone with one of the best cameras3',
                heading1: 'サンプルテキスト３－１',
                heading2: 'サンプルテキスト３－２',
                heading3: 'サンプルテキスト３－３',
                headingtext1: 'サンプルテキスト３　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプルテキスト文章３　サンプルテキスト文章　サンプルテキスト文章　',
                headingtext3: 'サンプルテキスト文章文章３　サンプルテキスト文章文章　サンプルテキスト文章文章　',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: 'A great phone with one of the best cameras4',
                heading1: 'サンプルテキスト４－１',
                heading2: 'サンプルテキスト４－２',
                heading3: 'サンプルテキスト４－３',
                headingtext1: 'サンプルテキスト４　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプルテキスト文章４　サンプルテキスト文章　サンプルテキスト文章　',
                headingtext3: 'サンプルテキスト文章文章４　サンプルテキスト文章文章　サンプルテキスト文章文章　',
            }
        ]
    }
    
    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }
    
    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb