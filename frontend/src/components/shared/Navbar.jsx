import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setAuthUser } from "@/redux/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-yellow-500">
              Job<span className="text-blue-950">Grab</span>🤌
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-12">
          <ul className="hidden md:flex font-medium items-center gap-5">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="hidden md:flex space-x-3">
              <Link to="/login">
                <Button className="bg-yellow-500 text-blue-950 rounded-2xl hover:bg-yellow-500 hover:cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="rounded-2xl">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={
                      user?.profile?.profilePhoto ||
                      "https://github.com/shadcn.png"
                    }
                    alt={user?.fullname || "User"}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-4 space-y-2 p-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={
                        user?.profile?.profilePhoto ||
                        "https://github.com/shadcn.png"
                      }
                      alt={user?.fullname || "User"}
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium">{user.fullname || "User"}</h1>
                    <p className="text-sm text-muted-foreground">
                      {user?.email || "user@example.com"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-800">
                  {user && user?.role === "Student" && (
                    <Link to="/profile">
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">View Profile</Button>
                      </div>
                    </Link>
                  )}
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="block md:hidden">
          <ul className="flex flex-col items-center font-medium gap-3 py-4">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
            {!user ? (
              <div className="flex flex-row items-center justify-center gap-2">
                <Link to="/login">
                  <Button className="bg-yellow-500 text-blue-950 rounded-2xl hover:bg-yellow-500 hover:cursor-pointer">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="rounded-2xl">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="">
                {user && user?.role === "Student" && (
                  <Link to="/profile">
                    <div className="flex w-fit items-center gap-2 cursor-pointer bg-white">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>
                  </Link>
                )}
                <div className="flex w-fit items-center gap-2 cursor-pointer bg-white">
                  <LogOut />
                  <Button onClick={logoutHandler} variant="link">
                    Logout
                  </Button>
                </div>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
