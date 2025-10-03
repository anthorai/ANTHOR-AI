import { BrowserRouter as Router, Routes, Route } from "react-router";
import { SupabaseAuthProvider } from "@/react-app/contexts/SupabaseAuthContext";
import HomePage from "@/react-app/pages/Home";
import About from "@/react-app/pages/About";
import Products from "@/react-app/pages/Products";
import Services from "@/react-app/pages/Services";
import Blog from "@/react-app/pages/Blog";
import Contact from "@/react-app/pages/Contact";
import SignIn from "@/react-app/pages/SignIn";
import SignUp from "@/react-app/pages/SignUp";
import ZyraBlog from "@/react-app/pages/ZyraBlog";
import AuthCallback from "@/react-app/pages/AuthCallback";

export default function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/blog/zyra-revolutionizing-shopify-with-ai" element={<ZyraBlog />} />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}
