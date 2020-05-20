/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './api/1/account_items/index'
import { Methods as Methods1 } from './api/1/account_items/_id@number'
import { Methods as Methods2 } from './api/1/banks/index'
import { Methods as Methods3 } from './api/1/banks/_id@number'
import { Methods as Methods4 } from './api/1/companies/index'
import { Methods as Methods5 } from './api/1/companies/_id@number'
import { Methods as Methods6 } from './api/1/deals/index'
import { Methods as Methods7 } from './api/1/deals/_id@number/index'
import { Methods as Methods8 } from './api/1/deals/_id@number/payments/index'
import { Methods as Methods9 } from './api/1/deals/_id@number/payments/_payment_id@number'
import { Methods as Methods10 } from './api/1/deals/_id@number/renews/index'
import { Methods as Methods11 } from './api/1/deals/_id@number/renews/_renew_id@number'
import { Methods as Methods12 } from './api/1/expense_application_line_templates/index'
import { Methods as Methods13 } from './api/1/expense_application_line_templates/_id@number'
import { Methods as Methods14 } from './api/1/expense_applications/index'
import { Methods as Methods15 } from './api/1/expense_applications/_id@number'
import { Methods as Methods16 } from './api/1/forms/selectables'
import { Methods as Methods17 } from './api/1/invoices/index'
import { Methods as Methods18 } from './api/1/invoices/_id@number'
import { Methods as Methods19 } from './api/1/items/index'
import { Methods as Methods20 } from './api/1/items/_id@number'
import { Methods as Methods21 } from './api/1/journals/index'
import { Methods as Methods22 } from './api/1/journals/reports/_id@number/download'
import { Methods as Methods23 } from './api/1/journals/reports/_id@number/status'
import { Methods as Methods24 } from './api/1/manual_journals/index'
import { Methods as Methods25 } from './api/1/manual_journals/_id@number'
import { Methods as Methods26 } from './api/1/partners/index'
import { Methods as Methods27 } from './api/1/partners/_id@number'
import { Methods as Methods28 } from './api/1/partners/code/_code@string'
import { Methods as Methods29 } from './api/1/quotations/index'
import { Methods as Methods30 } from './api/1/quotations/_id@number'
import { Methods as Methods31 } from './api/1/receipts/index'
import { Methods as Methods32 } from './api/1/receipts/_id@number'
import { Methods as Methods33 } from './api/1/reports/trial_bs'
import { Methods as Methods34 } from './api/1/reports/trial_bs_three_years'
import { Methods as Methods35 } from './api/1/reports/trial_bs_two_years'
import { Methods as Methods36 } from './api/1/reports/trial_pl'
import { Methods as Methods37 } from './api/1/reports/trial_pl_sections'
import { Methods as Methods38 } from './api/1/reports/trial_pl_three_years'
import { Methods as Methods39 } from './api/1/reports/trial_pl_two_years'
import { Methods as Methods40 } from './api/1/sections/index'
import { Methods as Methods41 } from './api/1/sections/_id@number'
import { Methods as Methods42 } from './api/1/segments/_segment_id@number/tags/index'
import { Methods as Methods43 } from './api/1/segments/_segment_id@number/tags/_id@number'
import { Methods as Methods44 } from './api/1/tags/index'
import { Methods as Methods45 } from './api/1/tags/_id@number'
import { Methods as Methods46 } from './api/1/taxes/codes/index'
import { Methods as Methods47 } from './api/1/taxes/codes/_code@number'
import { Methods as Methods48 } from './api/1/taxes/companies/_company_id@number'
import { Methods as Methods49 } from './api/1/transfers/index'
import { Methods as Methods50 } from './api/1/transfers/_id@number'
import { Methods as Methods51 } from './api/1/users/index'
import { Methods as Methods52 } from './api/1/users/capabilities'
import { Methods as Methods53 } from './api/1/users/me'
import { Methods as Methods54 } from './api/1/wallet_txns/index'
import { Methods as Methods55 } from './api/1/wallet_txns/_id@number'
import { Methods as Methods56 } from './api/1/walletables/index'
import { Methods as Methods57 } from './api/1/walletables/_type/_id@number'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'https://api.freee.co.jp' : client.baseURL).replace(/\/$/, '')

  return {
    api: {
      $1: {
        account_items: {
          _id: (val0: number) => ({
            get: (option: { query: Methods1['get']['query'], config?: T }) =>
              client.fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `/api/1/account_items/${val0}`, 'GET', option).json(),
            $get: async (option: { query: Methods1['get']['query'], config?: T }) =>
              (await client.fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `/api/1/account_items/${val0}`, 'GET', option).json()).data,
            put: (option: { data: Methods1['put']['reqBody'], config?: T }) =>
              client.fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, `/api/1/account_items/${val0}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option: { data: Methods1['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, `/api/1/account_items/${val0}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, `/api/1/account_items/${val0}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods1['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, `/api/1/account_items/${val0}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods0['get']['query'], config?: T }) =>
            client.fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '/api/1/account_items', 'GET', option).json(),
          $get: async (option: { query: Methods0['get']['query'], config?: T }) =>
            (await client.fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '/api/1/account_items', 'GET', option).json()).data,
          post: (option: { data: Methods0['post']['reqBody'], config?: T }) =>
            client.fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, '/api/1/account_items', 'POST', option, 'URLSearchParams').json(),
          $post: async (option: { data: Methods0['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, '/api/1/account_items', 'POST', option, 'URLSearchParams').json()).data
        },
        banks: {
          _id: (val1: number) => ({
            get: (option?: { config?: T }) =>
              client.fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `/api/1/banks/${val1}`, 'GET', option).json(),
            $get: async (option?: { config?: T }) =>
              (await client.fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `/api/1/banks/${val1}`, 'GET', option).json()).data
          }),
          get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
            client.fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, '/api/1/banks', 'GET', option).json(),
          $get: async (option?: { query?: Methods2['get']['query'], config?: T }) =>
            (await client.fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, '/api/1/banks', 'GET', option).json()).data
        },
        companies: {
          _id: (val2: number) => ({
            get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              client.fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `/api/1/companies/${val2}`, 'GET', option).json(),
            $get: async (option?: { query?: Methods5['get']['query'], config?: T }) =>
              (await client.fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `/api/1/companies/${val2}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods5['put']['reqBody'], config?: T }) =>
              client.fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, `/api/1/companies/${val2}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods5['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, `/api/1/companies/${val2}`, 'PUT', option, 'URLSearchParams').json()).data
          }),
          get: (option?: { config?: T }) =>
            client.fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, '/api/1/companies', 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, '/api/1/companies', 'GET', option).json()).data
        },
        deals: {
          _id: (val3: number) => ({
            payments: {
              _payment_id: (val4: number) => ({
                put: (option: { data: Methods9['put']['reqBody'], config?: T }) =>
                  client.fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, `/api/1/deals/${val3}/payments/${val4}`, 'PUT', option, 'URLSearchParams').json(),
                $put: async (option: { data: Methods9['put']['reqBody'], config?: T }) =>
                  (await client.fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, `/api/1/deals/${val3}/payments/${val4}`, 'PUT', option, 'URLSearchParams').json()).data,
                delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                  client.fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, `/api/1/deals/${val3}/payments/${val4}`, 'DELETE', option).send(),
                $delete: async (option: { query: Methods9['delete']['query'], config?: T }) =>
                  (await client.fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, `/api/1/deals/${val3}/payments/${val4}`, 'DELETE', option).send()).data
              }),
              post: (option: { data: Methods8['post']['reqBody'], config?: T }) =>
                client.fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `/api/1/deals/${val3}/payments`, 'POST', option, 'URLSearchParams').json(),
              $post: async (option: { data: Methods8['post']['reqBody'], config?: T }) =>
                (await client.fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `/api/1/deals/${val3}/payments`, 'POST', option, 'URLSearchParams').json()).data
            },
            renews: {
              _renew_id: (val5: number) => ({
                put: (option: { data: Methods11['put']['reqBody'], config?: T }) =>
                  client.fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, `/api/1/deals/${val3}/renews/${val5}`, 'PUT', option, 'URLSearchParams').json(),
                $put: async (option: { data: Methods11['put']['reqBody'], config?: T }) =>
                  (await client.fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, `/api/1/deals/${val3}/renews/${val5}`, 'PUT', option, 'URLSearchParams').json()).data,
                delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                  client.fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, `/api/1/deals/${val3}/renews/${val5}`, 'DELETE', option).json(),
                $delete: async (option: { query: Methods11['delete']['query'], config?: T }) =>
                  (await client.fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, `/api/1/deals/${val3}/renews/${val5}`, 'DELETE', option).json()).data
              }),
              post: (option: { data: Methods10['post']['reqBody'], config?: T }) =>
                client.fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `/api/1/deals/${val3}/renews`, 'POST', option, 'URLSearchParams').json(),
              $post: async (option: { data: Methods10['post']['reqBody'], config?: T }) =>
                (await client.fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `/api/1/deals/${val3}/renews`, 'POST', option, 'URLSearchParams').json()).data
            },
            get: (option: { query: Methods7['get']['query'], config?: T }) =>
              client.fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `/api/1/deals/${val3}`, 'GET', option).json(),
            $get: async (option: { query: Methods7['get']['query'], config?: T }) =>
              (await client.fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `/api/1/deals/${val3}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods7['put']['reqBody'], config?: T }) =>
              client.fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, `/api/1/deals/${val3}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods7['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, `/api/1/deals/${val3}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, `/api/1/deals/${val3}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods7['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, `/api/1/deals/${val3}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods6['get']['query'], config?: T }) =>
            client.fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, '/api/1/deals', 'GET', option).json(),
          $get: async (option: { query: Methods6['get']['query'], config?: T }) =>
            (await client.fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, '/api/1/deals', 'GET', option).json()).data,
          post: (option?: { data?: Methods6['post']['reqBody'], config?: T }) =>
            client.fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, '/api/1/deals', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods6['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, '/api/1/deals', 'POST', option, 'URLSearchParams').json()).data
        },
        expense_application_line_templates: {
          _id: (val6: number) => ({
            get: (option: { query: Methods13['get']['query'], config?: T }) =>
              client.fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `/api/1/expense_application_line_templates/${val6}`, 'GET', option).json(),
            $get: async (option: { query: Methods13['get']['query'], config?: T }) =>
              (await client.fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `/api/1/expense_application_line_templates/${val6}`, 'GET', option).json()).data,
            put: (option: { data: Methods13['put']['reqBody'], config?: T }) =>
              client.fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, `/api/1/expense_application_line_templates/${val6}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option: { data: Methods13['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, `/api/1/expense_application_line_templates/${val6}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods13['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, `/api/1/expense_application_line_templates/${val6}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods13['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, `/api/1/expense_application_line_templates/${val6}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods12['get']['query'], config?: T }) =>
            client.fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, '/api/1/expense_application_line_templates', 'GET', option).json(),
          $get: async (option: { query: Methods12['get']['query'], config?: T }) =>
            (await client.fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, '/api/1/expense_application_line_templates', 'GET', option).json()).data,
          post: (option: { data: Methods12['post']['reqBody'], config?: T }) =>
            client.fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, '/api/1/expense_application_line_templates', 'POST', option, 'URLSearchParams').json(),
          $post: async (option: { data: Methods12['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, '/api/1/expense_application_line_templates', 'POST', option, 'URLSearchParams').json()).data
        },
        expense_applications: {
          _id: (val7: number) => ({
            get: (option: { query: Methods15['get']['query'], config?: T }) =>
              client.fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `/api/1/expense_applications/${val7}`, 'GET', option).json(),
            $get: async (option: { query: Methods15['get']['query'], config?: T }) =>
              (await client.fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `/api/1/expense_applications/${val7}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods15['put']['reqBody'], config?: T }) =>
              client.fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, `/api/1/expense_applications/${val7}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods15['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, `/api/1/expense_applications/${val7}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods15['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, `/api/1/expense_applications/${val7}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods15['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, `/api/1/expense_applications/${val7}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods14['get']['query'], config?: T }) =>
            client.fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, '/api/1/expense_applications', 'GET', option).json(),
          $get: async (option: { query: Methods14['get']['query'], config?: T }) =>
            (await client.fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, '/api/1/expense_applications', 'GET', option).json()).data,
          post: (option?: { data?: Methods14['post']['reqBody'], config?: T }) =>
            client.fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, '/api/1/expense_applications', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods14['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, '/api/1/expense_applications', 'POST', option, 'URLSearchParams').json()).data
        },
        forms: {
          selectables: {
            get: (option: { query: Methods16['get']['query'], config?: T }) =>
              client.fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, '/api/1/forms/selectables', 'GET', option).json(),
            $get: async (option: { query: Methods16['get']['query'], config?: T }) =>
              (await client.fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, '/api/1/forms/selectables', 'GET', option).json()).data
          }
        },
        invoices: {
          _id: (val8: number) => ({
            get: (option: { query: Methods18['get']['query'], config?: T }) =>
              client.fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `/api/1/invoices/${val8}`, 'GET', option).json(),
            $get: async (option: { query: Methods18['get']['query'], config?: T }) =>
              (await client.fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `/api/1/invoices/${val8}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods18['put']['reqBody'], config?: T }) =>
              client.fetch<Methods18['put']['resBody'], BasicHeaders, Methods18['put']['status']>(prefix, `/api/1/invoices/${val8}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods18['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods18['put']['resBody'], BasicHeaders, Methods18['put']['status']>(prefix, `/api/1/invoices/${val8}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods18['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, `/api/1/invoices/${val8}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods18['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, `/api/1/invoices/${val8}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods17['get']['query'], config?: T }) =>
            client.fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, '/api/1/invoices', 'GET', option).json(),
          $get: async (option: { query: Methods17['get']['query'], config?: T }) =>
            (await client.fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, '/api/1/invoices', 'GET', option).json()).data,
          post: (option?: { data?: Methods17['post']['reqBody'], config?: T }) =>
            client.fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, '/api/1/invoices', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods17['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, '/api/1/invoices', 'POST', option, 'URLSearchParams').json()).data
        },
        items: {
          _id: (val9: number) => ({
            get: (option: { query: Methods20['get']['query'], config?: T }) =>
              client.fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, `/api/1/items/${val9}`, 'GET', option).json(),
            $get: async (option: { query: Methods20['get']['query'], config?: T }) =>
              (await client.fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, `/api/1/items/${val9}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods20['put']['reqBody'], config?: T }) =>
              client.fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, `/api/1/items/${val9}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods20['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, `/api/1/items/${val9}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods20['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, `/api/1/items/${val9}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods20['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, `/api/1/items/${val9}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods19['get']['query'], config?: T }) =>
            client.fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, '/api/1/items', 'GET', option).json(),
          $get: async (option: { query: Methods19['get']['query'], config?: T }) =>
            (await client.fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, '/api/1/items', 'GET', option).json()).data,
          post: (option?: { data?: Methods19['post']['reqBody'], config?: T }) =>
            client.fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, '/api/1/items', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods19['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, '/api/1/items', 'POST', option, 'URLSearchParams').json()).data
        },
        journals: {
          reports: {
            _id: (val10: number) => ({
              download: {
                get: (option: { query: Methods22['get']['query'], config?: T }) =>
                  client.fetch<void, BasicHeaders, Methods22['get']['status']>(prefix, `/api/1/journals/reports/${val10}/download`, 'GET', option).send(),
                $get: async (option: { query: Methods22['get']['query'], config?: T }) =>
                  (await client.fetch<void, BasicHeaders, Methods22['get']['status']>(prefix, `/api/1/journals/reports/${val10}/download`, 'GET', option).send()).data
              },
              status: {
                get: (option: { query: Methods23['get']['query'], config?: T }) =>
                  client.fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, `/api/1/journals/reports/${val10}/status`, 'GET', option).json(),
                $get: async (option: { query: Methods23['get']['query'], config?: T }) =>
                  (await client.fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, `/api/1/journals/reports/${val10}/status`, 'GET', option).json()).data
              }
            })
          },
          get: (option: { query: Methods21['get']['query'], config?: T }) =>
            client.fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, '/api/1/journals', 'GET', option).json(),
          $get: async (option: { query: Methods21['get']['query'], config?: T }) =>
            (await client.fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, '/api/1/journals', 'GET', option).json()).data
        },
        manual_journals: {
          _id: (val11: number) => ({
            get: (option: { query: Methods25['get']['query'], config?: T }) =>
              client.fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, `/api/1/manual_journals/${val11}`, 'GET', option).json(),
            $get: async (option: { query: Methods25['get']['query'], config?: T }) =>
              (await client.fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, `/api/1/manual_journals/${val11}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods25['put']['reqBody'], config?: T }) =>
              client.fetch<Methods25['put']['resBody'], BasicHeaders, Methods25['put']['status']>(prefix, `/api/1/manual_journals/${val11}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods25['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods25['put']['resBody'], BasicHeaders, Methods25['put']['status']>(prefix, `/api/1/manual_journals/${val11}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods25['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, `/api/1/manual_journals/${val11}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods25['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, `/api/1/manual_journals/${val11}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods24['get']['query'], config?: T }) =>
            client.fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, '/api/1/manual_journals', 'GET', option).json(),
          $get: async (option: { query: Methods24['get']['query'], config?: T }) =>
            (await client.fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, '/api/1/manual_journals', 'GET', option).json()).data,
          post: (option?: { data?: Methods24['post']['reqBody'], config?: T }) =>
            client.fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, '/api/1/manual_journals', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods24['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, '/api/1/manual_journals', 'POST', option, 'URLSearchParams').json()).data
        },
        partners: {
          _id: (val12: number) => ({
            get: (option: { query: Methods27['get']['query'], config?: T }) =>
              client.fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, `/api/1/partners/${val12}`, 'GET', option).json(),
            $get: async (option: { query: Methods27['get']['query'], config?: T }) =>
              (await client.fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, `/api/1/partners/${val12}`, 'GET', option).json()).data,
            put: (option: { data: Methods27['put']['reqBody'], config?: T }) =>
              client.fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, `/api/1/partners/${val12}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option: { data: Methods27['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, `/api/1/partners/${val12}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods27['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, `/api/1/partners/${val12}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods27['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, `/api/1/partners/${val12}`, 'DELETE', option).send()).data
          }),
          code: {
            _code: (val13: string) => ({
              put: (option: { data: Methods28['put']['reqBody'], config?: T }) =>
                client.fetch<Methods28['put']['resBody'], BasicHeaders, Methods28['put']['status']>(prefix, `/api/1/partners/code/${val13}`, 'PUT', option, 'URLSearchParams').json(),
              $put: async (option: { data: Methods28['put']['reqBody'], config?: T }) =>
                (await client.fetch<Methods28['put']['resBody'], BasicHeaders, Methods28['put']['status']>(prefix, `/api/1/partners/code/${val13}`, 'PUT', option, 'URLSearchParams').json()).data
            })
          },
          get: (option: { query: Methods26['get']['query'], config?: T }) =>
            client.fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, '/api/1/partners', 'GET', option).json(),
          $get: async (option: { query: Methods26['get']['query'], config?: T }) =>
            (await client.fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, '/api/1/partners', 'GET', option).json()).data,
          post: (option: { data: Methods26['post']['reqBody'], config?: T }) =>
            client.fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, '/api/1/partners', 'POST', option, 'URLSearchParams').json(),
          $post: async (option: { data: Methods26['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, '/api/1/partners', 'POST', option, 'URLSearchParams').json()).data
        },
        quotations: {
          _id: (val14: number) => ({
            get: (option: { query: Methods30['get']['query'], config?: T }) =>
              client.fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, `/api/1/quotations/${val14}`, 'GET', option).json(),
            $get: async (option: { query: Methods30['get']['query'], config?: T }) =>
              (await client.fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, `/api/1/quotations/${val14}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods30['put']['reqBody'], config?: T }) =>
              client.fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, `/api/1/quotations/${val14}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods30['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, `/api/1/quotations/${val14}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods30['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods30['delete']['status']>(prefix, `/api/1/quotations/${val14}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods30['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods30['delete']['status']>(prefix, `/api/1/quotations/${val14}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods29['get']['query'], config?: T }) =>
            client.fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, '/api/1/quotations', 'GET', option).json(),
          $get: async (option: { query: Methods29['get']['query'], config?: T }) =>
            (await client.fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, '/api/1/quotations', 'GET', option).json()).data,
          post: (option?: { data?: Methods29['post']['reqBody'], config?: T }) =>
            client.fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, '/api/1/quotations', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods29['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, '/api/1/quotations', 'POST', option, 'URLSearchParams').json()).data
        },
        receipts: {
          _id: (val15: number) => ({
            get: (option: { query: Methods32['get']['query'], config?: T }) =>
              client.fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, `/api/1/receipts/${val15}`, 'GET', option).json(),
            $get: async (option: { query: Methods32['get']['query'], config?: T }) =>
              (await client.fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, `/api/1/receipts/${val15}`, 'GET', option).json()).data,
            put: (option: { data: Methods32['put']['reqBody'], config?: T }) =>
              client.fetch<Methods32['put']['resBody'], BasicHeaders, Methods32['put']['status']>(prefix, `/api/1/receipts/${val15}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option: { data: Methods32['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods32['put']['resBody'], BasicHeaders, Methods32['put']['status']>(prefix, `/api/1/receipts/${val15}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods32['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, `/api/1/receipts/${val15}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods32['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, `/api/1/receipts/${val15}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods31['get']['query'], config?: T }) =>
            client.fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, '/api/1/receipts', 'GET', option).json(),
          $get: async (option: { query: Methods31['get']['query'], config?: T }) =>
            (await client.fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, '/api/1/receipts', 'GET', option).json()).data,
          post: (option: { data: Methods31['post']['reqBody'], config?: T }) =>
            client.fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, '/api/1/receipts', 'POST', option, 'FormData').json(),
          $post: async (option: { data: Methods31['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, '/api/1/receipts', 'POST', option, 'FormData').json()).data
        },
        reports: {
          trial_bs: {
            get: (option: { query: Methods33['get']['query'], config?: T }) =>
              client.fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, '/api/1/reports/trial_bs', 'GET', option).json(),
            $get: async (option: { query: Methods33['get']['query'], config?: T }) =>
              (await client.fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, '/api/1/reports/trial_bs', 'GET', option).json()).data
          },
          trial_bs_three_years: {
            get: (option: { query: Methods34['get']['query'], config?: T }) =>
              client.fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, '/api/1/reports/trial_bs_three_years', 'GET', option).json(),
            $get: async (option: { query: Methods34['get']['query'], config?: T }) =>
              (await client.fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, '/api/1/reports/trial_bs_three_years', 'GET', option).json()).data
          },
          trial_bs_two_years: {
            get: (option: { query: Methods35['get']['query'], config?: T }) =>
              client.fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, '/api/1/reports/trial_bs_two_years', 'GET', option).json(),
            $get: async (option: { query: Methods35['get']['query'], config?: T }) =>
              (await client.fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, '/api/1/reports/trial_bs_two_years', 'GET', option).json()).data
          },
          trial_pl: {
            get: (option: { query: Methods36['get']['query'], config?: T }) =>
              client.fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, '/api/1/reports/trial_pl', 'GET', option).json(),
            $get: async (option: { query: Methods36['get']['query'], config?: T }) =>
              (await client.fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, '/api/1/reports/trial_pl', 'GET', option).json()).data
          },
          trial_pl_sections: {
            get: (option: { query: Methods37['get']['query'], config?: T }) =>
              client.fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, '/api/1/reports/trial_pl_sections', 'GET', option).json(),
            $get: async (option: { query: Methods37['get']['query'], config?: T }) =>
              (await client.fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, '/api/1/reports/trial_pl_sections', 'GET', option).json()).data
          },
          trial_pl_three_years: {
            get: (option: { query: Methods38['get']['query'], config?: T }) =>
              client.fetch<Methods38['get']['resBody'], BasicHeaders, Methods38['get']['status']>(prefix, '/api/1/reports/trial_pl_three_years', 'GET', option).json(),
            $get: async (option: { query: Methods38['get']['query'], config?: T }) =>
              (await client.fetch<Methods38['get']['resBody'], BasicHeaders, Methods38['get']['status']>(prefix, '/api/1/reports/trial_pl_three_years', 'GET', option).json()).data
          },
          trial_pl_two_years: {
            get: (option: { query: Methods39['get']['query'], config?: T }) =>
              client.fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, '/api/1/reports/trial_pl_two_years', 'GET', option).json(),
            $get: async (option: { query: Methods39['get']['query'], config?: T }) =>
              (await client.fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, '/api/1/reports/trial_pl_two_years', 'GET', option).json()).data
          }
        },
        sections: {
          _id: (val16: number) => ({
            get: (option: { query: Methods41['get']['query'], config?: T }) =>
              client.fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, `/api/1/sections/${val16}`, 'GET', option).json(),
            $get: async (option: { query: Methods41['get']['query'], config?: T }) =>
              (await client.fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, `/api/1/sections/${val16}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods41['put']['reqBody'], config?: T }) =>
              client.fetch<Methods41['put']['resBody'], BasicHeaders, Methods41['put']['status']>(prefix, `/api/1/sections/${val16}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods41['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods41['put']['resBody'], BasicHeaders, Methods41['put']['status']>(prefix, `/api/1/sections/${val16}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods41['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods41['delete']['status']>(prefix, `/api/1/sections/${val16}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods41['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods41['delete']['status']>(prefix, `/api/1/sections/${val16}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods40['get']['query'], config?: T }) =>
            client.fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, '/api/1/sections', 'GET', option).json(),
          $get: async (option: { query: Methods40['get']['query'], config?: T }) =>
            (await client.fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, '/api/1/sections', 'GET', option).json()).data,
          post: (option?: { data?: Methods40['post']['reqBody'], config?: T }) =>
            client.fetch<Methods40['post']['resBody'], BasicHeaders, Methods40['post']['status']>(prefix, '/api/1/sections', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods40['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods40['post']['resBody'], BasicHeaders, Methods40['post']['status']>(prefix, '/api/1/sections', 'POST', option, 'URLSearchParams').json()).data
        },
        segments: {
          _segment_id: (val17: number) => ({
            tags: {
              _id: (val18: number) => ({
                put: (option: { data: Methods43['put']['reqBody'], config?: T }) =>
                  client.fetch<Methods43['put']['resBody'], BasicHeaders, Methods43['put']['status']>(prefix, `/api/1/segments/${val17}/tags/${val18}`, 'PUT', option, 'URLSearchParams').json(),
                $put: async (option: { data: Methods43['put']['reqBody'], config?: T }) =>
                  (await client.fetch<Methods43['put']['resBody'], BasicHeaders, Methods43['put']['status']>(prefix, `/api/1/segments/${val17}/tags/${val18}`, 'PUT', option, 'URLSearchParams').json()).data,
                delete: (option: { query: Methods43['delete']['query'], config?: T }) =>
                  client.fetch<void, BasicHeaders, Methods43['delete']['status']>(prefix, `/api/1/segments/${val17}/tags/${val18}`, 'DELETE', option).send(),
                $delete: async (option: { query: Methods43['delete']['query'], config?: T }) =>
                  (await client.fetch<void, BasicHeaders, Methods43['delete']['status']>(prefix, `/api/1/segments/${val17}/tags/${val18}`, 'DELETE', option).send()).data
              }),
              get: (option: { query: Methods42['get']['query'], config?: T }) =>
                client.fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, `/api/1/segments/${val17}/tags`, 'GET', option).json(),
              $get: async (option: { query: Methods42['get']['query'], config?: T }) =>
                (await client.fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, `/api/1/segments/${val17}/tags`, 'GET', option).json()).data,
              post: (option: { data: Methods42['post']['reqBody'], config?: T }) =>
                client.fetch<Methods42['post']['resBody'], BasicHeaders, Methods42['post']['status']>(prefix, `/api/1/segments/${val17}/tags`, 'POST', option, 'URLSearchParams').json(),
              $post: async (option: { data: Methods42['post']['reqBody'], config?: T }) =>
                (await client.fetch<Methods42['post']['resBody'], BasicHeaders, Methods42['post']['status']>(prefix, `/api/1/segments/${val17}/tags`, 'POST', option, 'URLSearchParams').json()).data
            }
          })
        },
        tags: {
          _id: (val19: number) => ({
            get: (option: { query: Methods45['get']['query'], config?: T }) =>
              client.fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, `/api/1/tags/${val19}`, 'GET', option).json(),
            $get: async (option: { query: Methods45['get']['query'], config?: T }) =>
              (await client.fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, `/api/1/tags/${val19}`, 'GET', option).json()).data,
            put: (option?: { data?: Methods45['put']['reqBody'], config?: T }) =>
              client.fetch<Methods45['put']['resBody'], BasicHeaders, Methods45['put']['status']>(prefix, `/api/1/tags/${val19}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods45['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods45['put']['resBody'], BasicHeaders, Methods45['put']['status']>(prefix, `/api/1/tags/${val19}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods45['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods45['delete']['status']>(prefix, `/api/1/tags/${val19}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods45['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods45['delete']['status']>(prefix, `/api/1/tags/${val19}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods44['get']['query'], config?: T }) =>
            client.fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, '/api/1/tags', 'GET', option).json(),
          $get: async (option: { query: Methods44['get']['query'], config?: T }) =>
            (await client.fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, '/api/1/tags', 'GET', option).json()).data,
          post: (option: { data: Methods44['post']['reqBody'], config?: T }) =>
            client.fetch<Methods44['post']['resBody'], BasicHeaders, Methods44['post']['status']>(prefix, '/api/1/tags', 'POST', option, 'URLSearchParams').json(),
          $post: async (option: { data: Methods44['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods44['post']['resBody'], BasicHeaders, Methods44['post']['status']>(prefix, '/api/1/tags', 'POST', option, 'URLSearchParams').json()).data
        },
        taxes: {
          codes: {
            _code: (val20: number) => ({
              get: (option?: { config?: T }) =>
                client.fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, `/api/1/taxes/codes/${val20}`, 'GET', option).json(),
              $get: async (option?: { config?: T }) =>
                (await client.fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, `/api/1/taxes/codes/${val20}`, 'GET', option).json()).data
            }),
            get: (option?: { config?: T }) =>
              client.fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, '/api/1/taxes/codes', 'GET', option).json(),
            $get: async (option?: { config?: T }) =>
              (await client.fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, '/api/1/taxes/codes', 'GET', option).json()).data
          },
          companies: {
            _company_id: (val21: number) => ({
              get: (option?: { config?: T }) =>
                client.fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, `/api/1/taxes/companies/${val21}`, 'GET', option).json(),
              $get: async (option?: { config?: T }) =>
                (await client.fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, `/api/1/taxes/companies/${val21}`, 'GET', option).json()).data
            })
          }
        },
        transfers: {
          _id: (val22: number) => ({
            get: (option: { query: Methods50['get']['query'], config?: T }) =>
              client.fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, `/api/1/transfers/${val22}`, 'GET', option).json(),
            $get: async (option: { query: Methods50['get']['query'], config?: T }) =>
              (await client.fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, `/api/1/transfers/${val22}`, 'GET', option).json()).data,
            put: (option: { data: Methods50['put']['reqBody'], config?: T }) =>
              client.fetch<Methods50['put']['resBody'], BasicHeaders, Methods50['put']['status']>(prefix, `/api/1/transfers/${val22}`, 'PUT', option, 'URLSearchParams').json(),
            $put: async (option: { data: Methods50['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods50['put']['resBody'], BasicHeaders, Methods50['put']['status']>(prefix, `/api/1/transfers/${val22}`, 'PUT', option, 'URLSearchParams').json()).data,
            delete: (option: { query: Methods50['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, `/api/1/transfers/${val22}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods50['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, `/api/1/transfers/${val22}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods49['get']['query'], config?: T }) =>
            client.fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, '/api/1/transfers', 'GET', option).json(),
          $get: async (option: { query: Methods49['get']['query'], config?: T }) =>
            (await client.fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, '/api/1/transfers', 'GET', option).json()).data,
          post: (option?: { data?: Methods49['post']['reqBody'], config?: T }) =>
            client.fetch<Methods49['post']['resBody'], BasicHeaders, Methods49['post']['status']>(prefix, '/api/1/transfers', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods49['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods49['post']['resBody'], BasicHeaders, Methods49['post']['status']>(prefix, '/api/1/transfers', 'POST', option, 'URLSearchParams').json()).data
        },
        users: {
          capabilities: {
            get: (option: { query: Methods52['get']['query'], config?: T }) =>
              client.fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, '/api/1/users/capabilities', 'GET', option).json(),
            $get: async (option: { query: Methods52['get']['query'], config?: T }) =>
              (await client.fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, '/api/1/users/capabilities', 'GET', option).json()).data
          },
          me: {
            get: (option?: { query?: Methods53['get']['query'], config?: T }) =>
              client.fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, '/api/1/users/me', 'GET', option).json(),
            $get: async (option?: { query?: Methods53['get']['query'], config?: T }) =>
              (await client.fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, '/api/1/users/me', 'GET', option).json()).data,
            put: (option?: { data?: Methods53['put']['reqBody'], config?: T }) =>
              client.fetch<Methods53['put']['resBody'], BasicHeaders, Methods53['put']['status']>(prefix, '/api/1/users/me', 'PUT', option, 'URLSearchParams').json(),
            $put: async (option?: { data?: Methods53['put']['reqBody'], config?: T }) =>
              (await client.fetch<Methods53['put']['resBody'], BasicHeaders, Methods53['put']['status']>(prefix, '/api/1/users/me', 'PUT', option, 'URLSearchParams').json()).data
          },
          get: (option: { query: Methods51['get']['query'], config?: T }) =>
            client.fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, '/api/1/users', 'GET', option).json(),
          $get: async (option: { query: Methods51['get']['query'], config?: T }) =>
            (await client.fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, '/api/1/users', 'GET', option).json()).data
        },
        wallet_txns: {
          _id: (val23: number) => ({
            get: (option: { query: Methods55['get']['query'], config?: T }) =>
              client.fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, `/api/1/wallet_txns/${val23}`, 'GET', option).json(),
            $get: async (option: { query: Methods55['get']['query'], config?: T }) =>
              (await client.fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, `/api/1/wallet_txns/${val23}`, 'GET', option).json()).data,
            delete: (option: { query: Methods55['delete']['query'], config?: T }) =>
              client.fetch<void, BasicHeaders, Methods55['delete']['status']>(prefix, `/api/1/wallet_txns/${val23}`, 'DELETE', option).send(),
            $delete: async (option: { query: Methods55['delete']['query'], config?: T }) =>
              (await client.fetch<void, BasicHeaders, Methods55['delete']['status']>(prefix, `/api/1/wallet_txns/${val23}`, 'DELETE', option).send()).data
          }),
          get: (option: { query: Methods54['get']['query'], config?: T }) =>
            client.fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, '/api/1/wallet_txns', 'GET', option).json(),
          $get: async (option: { query: Methods54['get']['query'], config?: T }) =>
            (await client.fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, '/api/1/wallet_txns', 'GET', option).json()).data,
          post: (option?: { data?: Methods54['post']['reqBody'], config?: T }) =>
            client.fetch<Methods54['post']['resBody'], BasicHeaders, Methods54['post']['status']>(prefix, '/api/1/wallet_txns', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods54['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods54['post']['resBody'], BasicHeaders, Methods54['post']['status']>(prefix, '/api/1/wallet_txns', 'POST', option, 'URLSearchParams').json()).data
        },
        walletables: {
          _type: (val24: number | string) => ({
            _id: (val25: number) => ({
              get: (option: { query: Methods57['get']['query'], config?: T }) =>
                client.fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, `/api/1/walletables/${val24}/${val25}`, 'GET', option).json(),
              $get: async (option: { query: Methods57['get']['query'], config?: T }) =>
                (await client.fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, `/api/1/walletables/${val24}/${val25}`, 'GET', option).json()).data,
              put: (option: { data?: Methods57['put']['reqBody'], query: Methods57['put']['query'], config?: T }) =>
                client.fetch<Methods57['put']['resBody'], BasicHeaders, Methods57['put']['status']>(prefix, `/api/1/walletables/${val24}/${val25}`, 'PUT', option, 'URLSearchParams').json(),
              $put: async (option: { data?: Methods57['put']['reqBody'], query: Methods57['put']['query'], config?: T }) =>
                (await client.fetch<Methods57['put']['resBody'], BasicHeaders, Methods57['put']['status']>(prefix, `/api/1/walletables/${val24}/${val25}`, 'PUT', option, 'URLSearchParams').json()).data,
              delete: (option: { query: Methods57['delete']['query'], config?: T }) =>
                client.fetch<void, BasicHeaders, Methods57['delete']['status']>(prefix, `/api/1/walletables/${val24}/${val25}`, 'DELETE', option).send(),
              $delete: async (option: { query: Methods57['delete']['query'], config?: T }) =>
                (await client.fetch<void, BasicHeaders, Methods57['delete']['status']>(prefix, `/api/1/walletables/${val24}/${val25}`, 'DELETE', option).send()).data
            })
          }),
          get: (option: { query: Methods56['get']['query'], config?: T }) =>
            client.fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, '/api/1/walletables', 'GET', option).json(),
          $get: async (option: { query: Methods56['get']['query'], config?: T }) =>
            (await client.fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, '/api/1/walletables', 'GET', option).json()).data,
          post: (option?: { data?: Methods56['post']['reqBody'], config?: T }) =>
            client.fetch<Methods56['post']['resBody'], BasicHeaders, Methods56['post']['status']>(prefix, '/api/1/walletables', 'POST', option, 'URLSearchParams').json(),
          $post: async (option?: { data?: Methods56['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods56['post']['resBody'], BasicHeaders, Methods56['post']['status']>(prefix, '/api/1/walletables', 'POST', option, 'URLSearchParams').json()).data
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
