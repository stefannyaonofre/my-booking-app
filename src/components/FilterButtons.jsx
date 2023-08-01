import { IconButton } from "@mui/material";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import FilterHdrOutlinedIcon from "@mui/icons-material/FilterHdrOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import React from "react";

const FilterButtons = ({ categories = [] }) => {

  const Icon = ({categoryName}) => {
    return categoryName === "playa" ? (
      <BeachAccessOutlinedIcon />
    ) : (
      categoryName === "montaña"? (<FilterHdrOutlinedIcon />): <HolidayVillageOutlinedIcon/>
    );
  }

  return (
    <div>
      {categories.length &&
        categories.map((item) => (
          // <Button key={item.id} variant='outlined' size='small'>
          //     {item.name}
          // </Button>
          <IconButton
            key={item.id}
            aria-label={item.name}
            sx={{ color: "gray" }}
          >
            <Icon categoryName ={item.name} />
          </IconButton>
        ))}
    </div>
  );
};

export default FilterButtons;
