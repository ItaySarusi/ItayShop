import React, { Fragment, useEffect, useRef, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { editOrder, removeOrder } from 'redux/order/order.action';
import {
  Button,
  Divider,
  HeaderBlockContainer,
  Heading,
  OrderHeaderContainer,
  OrderPageContainer,
  Title,
} from './admin.view-order.styles';

const AdminViewOrders = () => {
  const { orders } = useSelector((store) => store.order);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(null);
  const userDnRef = useRef();
  const userAddressRef = useRef();
  const priceRef = useRef();
  const [idAsc, setIdAsc] = useState(false);
  const [priceAsc, setPriceAsc] = useState(false);
  const [namesAsc, setNamesAsc] = useState(false);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const removeOrderFromCart = (index) => {
    dispatch(removeOrder(index));
    setTimeout(() => {
      window.location.reload(false);
    }, 2500);
    toast.success('Order Removed Successfully');
  };

  useEffect(() => {
    const endOffset = itemOffset + 5;
    setCurrentItems(orders.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(orders.length / 5));
  }, [itemOffset, orders]);

  function save(index) {
    let order = {
      ...orders[index],
      userDN: userDnRef.current.value
        ? userDnRef.current.value
        : orders[index].userDN,
      address: userAddressRef.current.value
        ? userAddressRef.current.value
        : orders[index].address,
      totalPrice: priceRef.current.value
        ? priceRef.current.value
        : orders[index].totalPrice,
    };
    dispatch(editOrder(order));

    setEdit(null);
    toast.success('Order Updated Successfully');
    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % orders.length;
    setItemOffset(newOffset);
  };

  function filterById() {
    if (idAsc) {
      const sorted = [...currentItems].sort((a, b) => a.userID - b.userID);
      setIdAsc(false);
      setCurrentItems(sorted);
    } else {
      const sorted = [...currentItems].sort((a, b) => b.userID - a.userID);
      setIdAsc(true);
      setCurrentItems(sorted);
    }
  }

  function filterByPrice() {
    if (priceAsc) {
      const sorted = [...currentItems].sort(
        (a, b) => a.totalPrice - b.totalPrice
      );
      setCurrentItems(sorted);
      setPriceAsc(false);
    } else {
      const sorted = [...currentItems].sort(
        (a, b) => b.totalPrice - a.totalPrice
      );
      setCurrentItems(sorted);
      setPriceAsc(true);
    }
  }

  function filterByNames() {
    if (namesAsc) {
      const sorted = [...currentItems].sort((a, b) =>
        a.userDN.localeCompare(b.userDN)
      );
      setCurrentItems(sorted);
      setNamesAsc(false);
    } else {
      const sorted = [...currentItems].sort((a, b) =>
        b.userDN.localeCompare(a.userDN)
      );
      setCurrentItems(sorted);
      setNamesAsc(true);
    }
  }

  return (
    <OrderPageContainer>
      <Heading>Admin Panel</Heading>
      <OrderHeaderContainer>
        <Title>ALL ORDERS</Title>
      </OrderHeaderContainer>

      <OrderHeaderContainer borderBottom>
        <HeaderBlockContainer width='15' uppercase>
          <span> Order ID </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span onClick={filterById} style={{ cursor: 'pointer' }}>
            {' '}
            User ID{' '}
          </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span onClick={filterByNames} style={{ cursor: 'pointer' }}>
            {' '}
            User Display Name{' '}
          </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span> Address </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span> Items </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span onClick={filterByPrice} style={{ cursor: 'pointer' }}>
            {' '}
            Total Price{' '}
          </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span> Delete </span>
        </HeaderBlockContainer>
        <HeaderBlockContainer width='15' uppercase>
          <span> Edit </span>
        </HeaderBlockContainer>
      </OrderHeaderContainer>
      <Divider />
      {currentItems.map((order, index) => {
        return (
          <Fragment key={index}>
            <OrderHeaderContainer key={order.id} borderBottom my={5}>
              <HeaderBlockContainer width='15'>
                <span> {order.id} </span>
              </HeaderBlockContainer>

              <HeaderBlockContainer width='15'>
                <span> {order.userID} </span>
              </HeaderBlockContainer>

              <HeaderBlockContainer width='15'>
                <span>
                  {' '}
                  {edit !== order.id ? (
                    order.userDN
                  ) : (
                    <input
                      name='userDn'
                      placeholder={order.userDN}
                      ref={userDnRef}
                      type='text'
                    />
                  )}{' '}
                </span>
              </HeaderBlockContainer>

              <HeaderBlockContainer width='15'>
                {' '}
                {edit !== order.id ? (
                  <span>{order.address}</span>
                ) : (
                  <input
                    name='address'
                    placeholder={order.address}
                    ref={userAddressRef}
                    type='text'
                  />
                )}{' '}
              </HeaderBlockContainer>

              <HeaderBlockContainer width='15'>
                {order?.items.map((item) => (
                  <Fragment key={item.name}>
                    <span> {item.quantity} </span>
                    <span> {item.name} </span>
                    <br />
                  </Fragment>
                ))}
              </HeaderBlockContainer>
              <HeaderBlockContainer width='15'>
                <span>
                  {' '}
                  ${' '}
                  {edit !== order.id ? (
                    order.totalPrice
                  ) : (
                    <input
                      name='price'
                      placeholder={order.totalPrice}
                      ref={priceRef}
                      type='number'
                    />
                  )}{' '}
                </span>
              </HeaderBlockContainer>
              {edit !== order.id ? (
                <>
                  <HeaderBlockContainer width='15'>
                    <Button
                      onClick={() => {
                        removeOrderFromCart(
                          orders.findIndex((i) => i.id === order.id)
                        );
                      }}
                    >
                      {' '}
                      <AiFillDelete />{' '}
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
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        activeClassName='active'
      />
    </OrderPageContainer>
  );
};

export default AdminViewOrders;
