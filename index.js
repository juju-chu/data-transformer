dataTransformer = (data) => {
    const { userOrders, userData, orderData } = data
    let result = []
    userOrders.forEach(function (userOrder) {
        const userId = userOrder.userId
        const orderIds = userOrder.orderIds
        const user = { id: userId, name: userData[userId] }
        const orders = orderIds.map((orderId) => {
            return {
                'id': orderId,
                name: orderData[orderId].name,
                price: orderData[orderId].price,
            }
        })
        const resultData = {
            'user': user,
            'orders': orders,
        }
        result.push(resultData);
        // console.log('orders: ', orders);
    })
    return result
}

// 輸入資料
const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userOrders = [
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
]
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
    'T01': { name: 'A', price: 499 },
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 },
    'T04': { name: 'D', price: 799 },
}

const inputData = {
    userIds,
    orderIds,
    userOrders,
    userData,
    orderData,
}

// 輸出結果
const result = dataTransformer(inputData);
console.log('result: ', result);

// 期望的輸出結果
// const result = [
//     {
//         user: { id: 'U01', name: 'Tom' },
//         orders: [
//             { id: 'T01', name: 'A', price: 499 },
//             { id: 'T02', name: 'B', price: 599 },
//         ],
//     },
//     {
//         user: { id: 'U02', name: 'Sam' },
//         orders: [],
//     },
//     {
//         user: { id: 'U03', name: 'John' },
//         orders: [
//             { id: 'T03', name: 'C', price: 699 },
//         ],
//     },
// ]