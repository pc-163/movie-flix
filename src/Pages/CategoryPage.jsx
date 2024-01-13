import Category from "../Layouts/Category"
import "../Assets/Styles/category.scss";
import MainCatg from "../Layouts/category/MainCategory";
import { createContext } from "react";

export const UserContext = createContext();

export const CategoryPage = () => {

    const API = 'https://api.themoviedb.org/3';
    const ImageAPI = 'http://image.tmdb.org/t/p/w500';

    return (
        <div className="cat-section">
            <Category />
            <UserContext.Provider value={ImageAPI}>
                <MainCatg API={API} />
            </UserContext.Provider>



        </div>
    )
}
