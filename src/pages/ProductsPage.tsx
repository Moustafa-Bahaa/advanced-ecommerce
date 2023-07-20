import { useLayoutEffect, useState } from 'react'
import Sort from '../components/sort/Sort'
import Filters from '../components/filters/Filters'
import Mobiles from '../components/Mobiles/Mobiles'
import PageHero from '../components/pageHero/pageHero'
import "../styles/shared.css"
import { MobilesModel } from '../models/mobilesModel'
import { deleteProduct, getAllMobiles } from '../services/mobilesService'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productSlice';


const  ProductsPage = () => {
    const [products, setProducts] = useState<MobilesModel[]>()
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState(5000);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortItem, setSortItem] = useState({ sorted: "price", reversed: false });
    const [category, setCategory] = useState("all");

    const dispatch = useDispatch()


    const fetchAllMobiles = () => {
        setLoading(true);
        getAllMobiles().then((mobiles: MobilesModel[]) => {
            setProducts(mobiles);
            setLoading(false);
        })
    }
    useLayoutEffect(() => {
        fetchAllMobiles();
    }, []);

    const clearFilters = () => {
        setSearchQuery("")
        setPriceRange(5000)
        setCategory("all")
    }

    const sortByprice = () => {
        const productsCopy = [...products];
        productsCopy.sort((userA, userB) => {
            if (sortItem.reversed) {
                return userA.price - userB.price;
            }
            return userB.price - userA.price;
        });
        setProducts(productsCopy);
        setSortItem({ sorted: "price", reversed: !sortItem.reversed });
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handelDelete = (id) => {
        deleteProduct(id).then(() => {
            fetchAllMobiles()
        })
    }

    return (
        <main>
            <PageHero title={"products"} />
            <div className='page'>
                <div className='section-center products'>
                    <Filters setPriceRange={setPriceRange} priceRange={priceRange} setSearchQuery={setSearchQuery}
                        searchQuery={searchQuery} setCategory={setCategory} clearFilters={clearFilters} category={category} />
                    <div>
                        <Sort sortByprice={sortByprice} />
                        <Mobiles priceRange={priceRange} loading={loading} products={products}
                            searchQuery={searchQuery} category={category} handleAddToCart={handleAddToCart} handelDelete={handelDelete} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductsPage
