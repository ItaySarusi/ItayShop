import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Divider,
  HeaderBlockContainer,
  OrderHeaderContainer,
  OrderPageContainer,
} from "./view-order.styles";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";
import { editOrder, removeOrder } from "redux/order/order.action";
import ReactPaginate from "react-paginate";

const ViewOrders = () => {
  const { orders } = useSelector((store) => store.order);
  const { currentUser } = useSelector((store) => store.user);
  const [edit, setEdit] = useState(null);
  const addressRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const removeOrderFromCart = (index) => {
    dispatch(removeOrder(index));
    setTimeout(() => {
      window.location.reload(false);
    }, 2500);
    toast.success("Order Removed Successfully");
  };

  useEffect(() => {
    const myOrders = orders.filter((order) => order.userID === currentUser.id);
    const endOffset = itemOffset + 5;
    setCurrentItems(myOrders.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(myOrders.length / 5));
  }, [itemOffset, orders, currentUser]);

  function save(index) {
    let order = {
      ...orders[index],
      userDN: nameRef.current.value
        ? nameRef.current.value
        : orders[index].userDN,
      address: addressRef.current.value
        ? addressRef.current.value
        : orders[index].address,
    };
    dispatch(editOrder(order));
    setEdit(null);
    toast.success("Order Updated Successfully");
    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % orders.length;
    setItemOffset(newOffset);
  };

  return (
    <OrderPageContainer>
      <OrderHeaderContainer borderBottom>
        <HeaderBlockContainer width="15" uppercase>
          <span> Orders Id </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width="15" uppercase>
          <span> Name </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width="15" uppercase>
          <span> Address </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width="15" uppercase>
          <span> Items </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width="15.5" uppercase>
          <span> Total Price </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width="15" uppercase>
          <span> Delete </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width="15" uppercase>
          <span> Edit </span>
        </HeaderBlockContainer>
      </OrderHeaderContainer>
      <Divider />
      {currentItems.map((order, index) => {
        return (
          <Fragment key={index}>
            <OrderHeaderContainer key={order.id} borderBottom my={5}>
              <HeaderBlockContainer width="15">
                <span> {order.id} </span>
              </HeaderBlockContainer>
              <HeaderBlockContainer width="15">
                <span>
                  {" "}
                  {edit !== order.id ? (
                    order.userDN
                  ) : (
                    <input
                      name="address"
                      placeholder={order.userDN}
                      ref={nameRef}
                      type="text"
                    />
                  )}{" "}
                </span>
              </HeaderBlockContainer>
              <HeaderBlockContainer width="15">
                {" "}
                {edit !== order.id ? (
                  <span>{order.address}</span>
                ) : (
                  <input
                    name="address"
                    placeholder={order.address}
                    ref={addressRef}
                    type="text"
                  />
                )}{" "}
              </HeaderBlockContainer>

              <HeaderBlockContainer width="15">
                {order?.items.map((item, i) => (
                  <Fragment key={i}>
                    <span> {item.quantity} </span>
                    <span> {item.name} </span>
                    <br />
                  </Fragment>
                ))}
              </HeaderBlockContainer>

              <HeaderBlockContainer width="15">
                <span> $ {order.totalPrice} </span>
              </HeaderBlockContainer>
              {edit !== order.id ? (
                <>
                  <HeaderBlockContainer width="15">
                    <Button
                      onClick={() => {
                        removeOrderFromCart(
                          orders.findIndex((i) => i.id === order.id)
                        );
                      }}
                    >
                      {" "}
                      <AiFillDelete />{" "}
                    </Button>
                  </HeaderBlockContainer>
                  <HeaderBlockContainer>
                    <Button
                      onClick={() => {
                        setEdit(order.id);
                      }}
                    >
                      <AiFillEdit />
                    </Button>
                  </HeaderBlockContainer>
                </>
              ) : (
                <HeaderBlockContainer>
                  <Button
                    onClick={() => {
                      save(orders.findIndex((i) => i.id === order.id));
                    }}
                  >
                    <AiFillSave />
                  </Button>
                </HeaderBlockContainer>
              )}
            </OrderHeaderContainer>
            <Divider />
          </Fragment>
        );
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </OrderPageContainer>
  );
};

export default ViewOrders;
