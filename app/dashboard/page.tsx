"use client";

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

type Tenant = {
  email: string;
  room: string;
  exp?: number;
};

export default function Dashboard() {
  const [tenant, setTenant] = useState<Tenant | null>(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token in LocalStorage:", token);

      if (!token) {
        throw new Error("No token found");
      }

      const decoded = jwtDecode<Tenant>(token);
      console.log("Decoded Token:", decoded);

      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new Error("Token expired");
      }

      setTenant(decoded);
    } catch (error) {
      console.error("Error in Dashboard:", error);
      window.location.href = "/login"; // Redirect if token is invalid
    }
  }, []);

  if (!tenant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {tenant.email}</h1>
      <p>You are assigned to <strong>{tenant.room}</strong>.</p>
    </div>
  );
}
