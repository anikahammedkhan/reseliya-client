import { useEffect, useState } from "react";

const useCheckRole = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
                const user = data.find((user) => user.email === email);
                if (user) {
                    setIsAdmin(user.role === "Admin");
                    setIsSeller(user.role === "Seller");
                    setIsBuyer(user.role === "Buyer");
                }
            });
    }, [email]);

    return { isAdmin, isSeller, isBuyer };
}

export default useCheckRole;