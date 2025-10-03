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
import ZyraBlog from "@/react-app/pages/ZyraBlog";
import AuthCallback from "@/react-app/pages/AuthCallback";

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
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/blog/zyra-revolutionizing-shopify-with-ai" element={<ProtectedRoute><ZyraBlog /></ProtectedRoute>} />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}
