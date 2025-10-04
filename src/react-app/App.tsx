import { BrowserRouter as Router, Routes, Route } from "react-router";
import { SupabaseAuthProvider } from "@/react-app/contexts/SupabaseAuthContext";
import ProtectedRoute from "@/react-app/components/ProtectedRoute";
import HomePage from "@/react-app/pages/Home";
import About from "@/react-app/pages/About";
import Products from "@/react-app/pages/Products";
import Services from "@/react-app/pages/Services";
import Blog from "@/react-app/pages/Blog";
import Contact from "@/react-app/pages/Contact";
import LogIn from "@/react-app/pages/LogIn";
import CreateAccount from "@/react-app/pages/CreateAccount";
import AuthCallback from "@/react-app/pages/AuthCallback";
import AINews from "@/react-app/pages/blog/AINews";
import ProductUpdates from "@/react-app/pages/blog/ProductUpdates";
import BusinessInsights from "@/react-app/pages/blog/BusinessInsights";
import BlogArticle from "@/react-app/pages/blog/BlogArticle";

export default function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/blog/ai-news" element={<ProtectedRoute><AINews /></ProtectedRoute>} />
          <Route path="/blog/product-updates" element={<ProtectedRoute><ProductUpdates /></ProtectedRoute>} />
          <Route path="/blog/business-insights" element={<ProtectedRoute><BusinessInsights /></ProtectedRoute>} />
          <Route path="/blog/:slug" element={<ProtectedRoute><BlogArticle /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}
