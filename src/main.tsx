import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Model, createServer } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        { id: 1, title: 'freelancer', type: 'deposit', category: 'Dev', amount: 6000, createAt: new Date('2024-01-05 09:00:00')},
        { id: 2, title: 'freelancer', type: 'deposit', category: 'Dev', amount: 2000, createAt: new Date('2024-01-09 15:00:00')},
        { id: 4, title: 'contas diversas', type: 'withdraw', category: 'Dev', amount: 2000, createAt: new Date('2024-01-15 15:00:00')},
        { id: 5, title: 'contas diversas', type: 'withdraw', category: 'Dev', amount: 2000, createAt: new Date('2024-01-15 15:00:00')},
        { id: 6, title: 'contas diversas', type: 'withdraw', category: 'Dev', amount: 2000, createAt: new Date('2024-01-15 15:00:00')}
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
