import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Table from "../component/Home/Dashoard/Table";
import UserPage from "../component/user/UserPage";
import RolePage from "../component/Roles/RolePage";
import ServiesPage from "../component/Servies/Servies";
import CategiesPage from "../component/categories/CategoriesPage";
import ProductPage from "../component/product/Product";
import SubCategiesPage from "../component/subCategries/SubCategries";
import OrderPage from "../component/order/Order";
import CancelledPage from "../component/Cancelled/Cancelled";
import CartItemPage from "../component/cartItem/CartItem";
import ReviesPage from "../component/reviews/Reviews";
import ContactPage from "../component/contactUs/Contact";
import FavoritePage from "../component/favoriteList/Favorite";
import StaticPage from "../component/staticPage/StaticPage";
import EditPage from "../component/Home/edit/Edit";
import ViewDetalisPage from "../component/Home/View/ViewDetails";
import Delete from "../component/Home/Delete";

// import EditPage from "../component/Home/edit/Edit";
// import SideBar from "../SideBar";
// import LoginPage from "../loginPages/LoginPage";
// import SideBar from "../../component/SideBar";
// import NavBar from "../NavBar";
// import Delete from "../Home/Delete";
// import DashboardPage from "../component/Home/Dashoard";
// import ForgetPassWord from "../loginPages/ForgetPassWord";
// import ResetPass from "../loginPages/ResetPass";
// import ChangeSuccessful from "../loginPages/ChangeSuccessful";
// import VerificationCode from "../loginPages/VerificationCode";
// import SideBar from "../SideBAr";

const RouterPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Table />} />
          <Route path="users" element={<UserPage />} />
          <Route path="role" element={<RolePage />} />
          <Route path="service" element={<ServiesPage />} />
          <Route path="categories" element={<CategiesPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="subcategiesPage" element={<SubCategiesPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="cancelled" element={<CancelledPage />} />
          <Route path="cartitem" element={<CartItemPage />} />
          <Route path="revies" element={<ReviesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="static" element={<StaticPage />} />
        </Route>
        <Route path="edit" element={<EditPage />} />
        <Route path="viewdetalis" element={<ViewDetalisPage />} />
        <Route path="remove" element={<Delete />} />

        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPassWord />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path="/change-successful" element={<ChangeSuccessful />} />
        <Route path="/verification-code" element={<VerificationCode />} /> */}
        {/* <Route path="/side-bar" element={<SideBar />}></Route> */}
        {/* <Route path="/nav-bar" element={<NavBar />}></Route> */}
        {/* <Route path="edit" element={<EditPage />} /> */}
        {/* <Route path="/remove" element={<Delete />} /> */}

        {/* <Route path="/dashboard-page" element={<DashboardPage />} /> */}
      </Routes>
    </Router>
  );
};

export default RouterPage;
