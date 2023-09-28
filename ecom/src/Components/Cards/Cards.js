import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Card.css";
import Pagination from "../Pagination/Pagination";

export default function Cards({
  priceFilter,
  categoryFilter,
  searchValueFilter,
  data,
  currentPage,
  setCurrentPage,
  cart,
  setCart
}) {
  const [currentData, setCurrentData] = useState([]);
  let itemsPerPage = 8;
  let [totalPages, setTotalPages] = useState(
    Math.ceil(currentData.length / itemsPerPage)
  );
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  const displayData = applyFilters(
    priceFilter,
    categoryFilter,
    searchValueFilter
  );

  function applyFilters(priceFilter, categoryFilter, searchValueFilter) {
    let updatedData = [...currentData];

    if (categoryFilter.length) {
      updatedData = updatedData.filter((item) =>
        categoryFilter.includes(item.category)
      );
    }
    if (priceFilter.length) {
      updatedData = updatedData.filter((listing) => {
        let found = false;
        priceFilter.forEach((item) => {
          let low = item.split("-")[0];
          let high = item.split("-")[1];
          if (Number(listing.price >= low) && Number(listing.price <= high)) {
            found = true;
          }
        });
        return found;
      });
    }
    if (searchValueFilter.length) {
      updatedData = updatedData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValueFilter.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchValueFilter.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(searchValueFilter.toLowerCase())
      );
    }
    //console.log(updatedData);
    return updatedData;
  }

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  useEffect(() => {
    setTotalPages(Math.ceil(displayData.length / itemsPerPage));
  }, [displayData]);

  const handleAddToCart = (data) => {
    let exist = cart.find((item)=>item.id===data.id)
    if(exist){
      alert("Item Already in Cart")
    }
    else{
      setCart([...cart,{...data,qty:1}])
    }
    //console.log(cart)
  };
  return (
    <>
      <div>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2} className="cards-maincontainer" style={{width:"70vw"}}>
            {displayData.length === 0 ? (
              <div className="errormsg">
                <p>No Products Found</p>
              </div>
            ) : (
              displayData.slice(startIndex, endIndex).map((item, index) => {
                return (
                  <Grid item xs={12} md={3} key={index} >
                    <Card sx={{ maxWidth: 280 }} className="card-items">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="170"
                          image={item.images[0]}
                          alt={item.title}
                        />
                        <Typography
                          className="item-name"
                          style={{
                            fontSize: "13px",
                            margin: "5px",
                            fontWeight: "500",
                            padding: "5px",
                          }}
                        >
                          {item.brand} {item.title}
                        </Typography>
                        <CardContent className="card-content">
                          <Typography
                            gutterBottom
                            component="div"
                            style={{ fontSize: "14px", textAlign: "center" }}
                          >
                            ${item.price}
                          </Typography>
                          <CardActions>
                            <Typography
                              className="add-to-cart"
                              onClick={() => handleAddToCart(item)}
                              style={{ fontSize: "12px", textAlign: "center",fontWeight:"600" }}
                            >
                              Add To Cart
                            </Typography>
                          </CardActions>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
