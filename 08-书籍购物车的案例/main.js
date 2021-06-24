const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: 'name1',
                date: '2006-9',
                price: 21,
                count: 1
            },
            {
                id: 2,
                name: 'name2',
                date: '2016-9',
                price: 24,
                count: 1
            },
            {
                id: 3,
                name: 'name3',
                date: '2206-9',
                price: 121,
                count: 1
            },
            {
                id: 4,
                name: 'name4',
                date: '2236-9',
                price: 212,
                count: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '$' + price.toFixed(2)
        // }
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removehandler(index) {
            this.books.splice()
        }
    },
    filters: {
        showPrice(price) {
            return '$' + price.toFixed(2)
        }
    }
})