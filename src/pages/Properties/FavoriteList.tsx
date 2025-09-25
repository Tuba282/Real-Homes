import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaBath, FaBed } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { properties } from "../../Settings/data";

const FavoriteList = React.forwardRef(function FavoriteList(_, ref) {
    const [open, setOpen] = React.useState(false);
    const [favoriteIds, setFavoriteIds] = React.useState<number[]>([]);

    // toggle drawer
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // add property to favorites
    const addToFavorites = (id: number) => {
        if (!favoriteIds.includes(id)) {
            setFavoriteIds((prev) => [...prev, id]);
        }
        setOpen(true); // click ke baad drawer khol de
    };

    // expose method to parent via ref
    React.useImperativeHandle(ref, () => ({ addToFavorites }));

    // delete property from favorites
    const removeFavorite = (id: number) => {
        setFavoriteIds((prev) => prev.filter((fid) => fid !== id));
    };

    // get actual property details
    const favoriteProperties = properties.filter((prop) =>
        favoriteIds.includes(prop.id)
    );

    const DrawerList = (
        <Box sx={{ width: 330 }} role="presentation" className="py-6 px-2">
            {favoriteProperties.length === 0 ? (
                <div className="text-center text-gray-500">
                    No favorite properties added.
                </div>
            ) : (
                favoriteProperties.map((prop) => (
                    <div
                        key={prop.id}
                        className="w-full grid shadow rounded overflow-hidden my-3"
                    >
                        {/* Left: Image Section */}
                        <div className="relative ">
                            <img
                                src={prop.image}
                                alt={prop.title}
                                className=" w-full h-48 lg:h-[200px] object-cover"
                            />

                            {/* Delete Button */}
                            <div className="absolute bottom-2 right-2 flex gap-2">
                                <button
                                    onClick={() => removeFavorite(prop.id)}
                                    className=" p-1 rounded-full hover:bg-red-500 bg-[var(--blue)]"
                                >
                                    <MdDelete size={20} className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Middle: Property Info */}
                        <div className="flex-1 grid p-6 h-full">
                            <h3 className="text-xl font-bold text-gray-800">{prop.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{prop.date}</p>

                            {/* Specs */}
                            <div className="flex gap-6 mt-3 text-gray-600 text-sm">
                                <span className="flex flex-col justify-center items-start text-xs! gap-1">
                                    <FaBed size={20} className="text-gray-500" /> {prop.beds} Bedroom
                                </span>
                                <span className="flex flex-col justify-center items-start text-xs! gap-1">
                                    <FaBath size={20} className="text-gray-500" /> {prop.baths} Bathroom
                                </span>
                                <span className="flex flex-col justify-center items-start text-xs! gap-1">
                                    <PiMapPinAreaFill size={20} className="text-gray-500" />{" "}
                                    {prop.area} sq ft
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </Box>
    );

    return (
        <div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
});

export default FavoriteList;
