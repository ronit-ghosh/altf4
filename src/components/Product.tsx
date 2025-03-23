import ProductImage from "./Product-Image";
import ProductDetails from "./Product-Details";
import ProductSize from "./Product-Size";
import ProductPrice from "./Product-Price";
import ProductButtons from "./Product-Buttons";

export default function Product() {
    return (
        <main className="w-full flex flex-col md:flex-row items-center justify-center md:gap-14 md:mt-10 pb-10">
            <ProductImage />
            <div className="flex flex-col gap-3 mx-auto md:mx-0 mt-7.5 md:mb-36">
                <ProductDetails />
                {/* size */}
                <ProductSize />
                <ProductPrice />
                <ProductButtons />
            </div>
        </main>
    )
}
