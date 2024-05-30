const express = require("express");
const router = express.Router();
const {
  Order,
  Basket,
  Favorite,
  Color,
  Pattern,
  Image,
} = require("../../db/models");
const { verifyAccessToken } = require('../middlewares/verifyTokens');

router.get("/account/color", verifyAccessToken, async (req, res) => {
  const colors = await Color.findAll();
  res.json(colors);
});

router.get("/account/color/:id", verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  const colorId = await Color.findByPk(id);
  if (!colorId) {
    res.sendStatus(404);
  }
  res.status(200).send(productId);
});

router.get("/account/pattern", verifyAccessToken, async (req, res) => {
  const patterns = await Pattern.findAll();
  console.log(patterns)
  res.json(patterns);
});

router.get("/account/pattern/:id", verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  const patternId = await Pattern.findByPk(id);
  if (!patternId) {
    res.sendStatus(404);
  }
  res.status(200).send(patternId);
});

router.get("/account/image", verifyAccessToken, async (req, res) => {
  const images = await Image.findAll();
  res.json(images);
});

router.get("/account/image/:id", verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  const imageId = await Image.findByPk(id);
  if (!imageId) {
    res.sendStatus(404);
  }
  res.status(200).send(imageId);
});

let Orders = [];
// Функция для получения содержимого корзины
router.get("/account/basket", verifyAccessToken, async (req, res) => {
  try {
    const Orders = await Basket.findAll();
    res.json(Orders);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении данных корзины" });
  }
});

// Функция для добавления товара в корзину
router.post("/account/basket/update/:id", verifyAccessToken, async (req, res) => {
  try {
    const { ordersId, quantity } = req.body;
    const existOrders = await Basket.find((el) => el.ordersId === ordersId);
    if (existOrders) {
      existOrders.quantity += quantity;
    } else {
      Orders.push({ ordersId, quantity });
    }
    res.json(Orders);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в корзину" });
  }
});

// Функция для удаления товара из корзины
router.delete('/account/basket/delete/:id', verifyAccessToken, async (req, res) => {
  try {
    const { ordersId } = req.params;
    const indexFavorit = await Basket.findIndex(el => el.ordersId === ordersId);
    if(indexFavorit !== -1) {
        Orders.splice(indexFavorit, 1);
    }
    res.json(Orders);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении товара из корзины" });
  }
});

let orders = [];
// Функция для получения содержимого заказа
router.get("/account/basket", verifyAccessToken, async (req, res) => {
  try {
    const order = await Order.findAll();
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении данных корзины" });
  }
});
///socks/account/basket/add
// Функция для добавления товара в заказ
router.post("/account/basket/add", verifyAccessToken, async (req, res) => {
  try {
    console.log(req.body)
    
    console.log(res.locals)
    const { color, image,pattern  } = req.body;
    const existOrders = await Basket.find((el) => el.ordersId === ordersId);
    const colorId = (await Color.findOne((el) => el.name === color.name )).id;
    console.log(colorId)
    if (existOrders) {
      existOrders.quantity += quantity;
    } else {
      Basket.create({...req.body,userId: res.locals.user?.id});
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в корзину" });
  }
});

// Функция для удаления товара из заказа
router.delete('/account/basket/delete/:id', verifyAccessToken, async (req, res) => {
  try {
    const { ordersId } = req.params;
    const indexFavorit = await Order.findIndex(el => el.ordersId === ordersId);
    if(indexFavorit !== -1) {
        orders.splice(indexFavorit, 1);
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении товара из корзины" });
  }
});

let favorites = [];
// Функция для получения содержимого избранного
router.get("/account/basket", verifyAccessToken, async (req, res) => {
  try {
    const favorite = await Favorite.findAll();
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении данных корзины" });
  }
});

// Функция для добавления товара в избранное
router.post("/account/basket/update/:id", verifyAccessToken, async (req, res) => {
  try {
    const { ordersId, quantity } = req.body;
    const existFavorites = await Favorite.find((el) => el.ordersId === ordersId);
    if (existFavorites) {
        existFavorites.quantity += quantity;
    } else {
        favorites.push({ ordersId, quantity });
    }
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при добавлении товара в корзину" });
  }
});

// Функция для удаления товара из избранного
router.delete('/account/basket/delete/:id', verifyAccessToken, async (req, res) => {
  try {
    const { ordersId } = req.params;
    const indexFavorit = await Favorite.findIndex(el => el.ordersId === ordersId);
    if(indexFavorit !== -1) {
        favorites.splice(indexFavorit, 1);
    }
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении товара из корзины" });
  }
});

module.exports = router;
