import { useEffect } from "react";
import { fetchGalleryData } from "../../store/actions/galleryActions";
import Header from "../header/Header"
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { selectGalleryState } from "../../store/selectors/gallerySelector";
import React,{Fragment} from "react";

type Props = {
    children: JSX.Element | JSX.Element[]
}
const Layout = ({ children }: Props) => {
    const gallery = useSelector(selectGalleryState);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchGalleryData(gallery.filters))
    }, [dispatch, gallery.filters]);
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default Layout