/* eslint-disable */
export type paymentParams = {
  company_id: number
  date: string
  from_walletable_type: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
  from_walletable_id: number
  amount: number
}

export type dealCreateParams = {
  issue_date: string
  type: 'income' | 'expense'
  company_id: number
  due_date?: string
  partner_id?: number
  partner_code?: string
  ref_number?: string
  details: {
    tax_code?: number
    tax_id?: number
    account_item_id: number
    amount: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
    description?: string
    vat?: number
  }[]
  payments?: {
    amount: number
    from_walletable_id: number
    from_walletable_type: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
    date: string
  }[]
  receipt_ids?: number[]
}

export type dealUpdateParams = {
  issue_date: string
  type: 'income' | 'expense'
  company_id: number
  due_date?: string
  partner_id?: number
  partner_code?: string
  ref_number?: string
  details: {
    id?: number
    tax_code?: number
    tax_id?: number
    account_item_id: number
    amount: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
    description?: string
    vat?: number
  }[]
  receipt_ids?: number[]
}

export type manualJournalCreateParams = {
  company_id: number
  issue_date: string
  adjustment?: boolean
  details: {
    entry_side: 'debit' | 'credit'
    tax_code: number
    account_item_id: number
    amount: number
    vat?: number
    partner_id?: number
    partner_code?: string
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
    description?: string
  }[]
}

export type manualJournalUpdateParams = {
  company_id: number
  issue_date: string
  adjustment?: boolean
  details: {
    id?: number
    entry_side: 'debit' | 'credit'
    tax_code: number
    account_item_id: number
    amount: number
    vat?: number
    partner_id?: number
    partner_code?: string
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
    description?: string
  }[]
}

export type companyParams = {
  name?: string
  name_kana?: string
  contact_name?: string

  address_attributes?: {
    zipcode?: string
    prefecture_code?: number
    street_name1?: string
    street_name2?: string
  }

  phone1?: string
  phone2?: string
  fax?: string

  sales_information_attributes?: {
    industry_class?: 'agriculture_forestry_fisheries_ore' | 'construction' | 'manufacturing_processing' | 'it' | 'transportation_logistics' | 'retail_wholesale' | 'finance_insurance' | 'real_estate_rental' | 'profession' | 'design_production' | 'food' | 'leisure_entertainment' | 'lifestyle' | 'education' | 'medical_welfare' | 'other_services' | 'other'
    industry_code?: 'agriculture' | 'forestry' | 'fishing_industry' | 'mining' | 'civil_contractors' | 'pavement' | 'carpenter' | 'renovation' | 'electrical_plumbing' | 'grocery' | 'machinery_manufacturing' | 'printing' | 'other_manufacturing' | 'software_development' | 'system_development' | 'survey_analysis' | 'server_management' | 'website_production' | 'online_service_management' | 'online_advertising_agency' | 'online_advertising_planning_production' | 'online_media_management' | 'portal_site_management' | 'other_it_services' | 'transport_delivery' | 'delivery' | 'other_transportation_logistics' | 'other_wholesale' | 'clothing_wholesale_fiber' | 'food_wholesale' | 'entrusted_development_wholesale' | 'online_shop' | 'fashion_grocery_store' | 'food_store' | 'entrusted_store' | 'other_store' | 'financial_instruments_exchange' | 'commodity_futures_investment_advisor' | 'other_financial' | 'brokerage_insurance' | 'other_insurance' | 'real_estate_developer' | 'real_estate_brokerage' | 'rent_coin_parking_management' | 'rental_office_co_working_space' | 'rental_lease' | 'cpa_tax_accountant' | 'law_office' | 'judicial_and_administrative_scrivener' | 'labor_consultant' | 'other_profession' | 'business_consultant' | 'academic_research_development' | 'advertising_agency' | 'advertising_planning_production' | 'design_development' | 'apparel_industry_design' | 'website_design' | 'advertising_planning_design' | 'other_design' | 'restaurants_coffee_shops' | 'sale_of_lunch' | 'bread_confectionery_manufacture_sale' | 'delivery_catering_mobile_catering' | 'hotel_inn' | 'homestay' | 'travel_agency' | 'leisure_sports_facility_management' | 'show_event_management' | 'barber' | 'beauty_salon' | 'spa_sand_bath_sauna' | 'este_ail_salon' | 'bridal_planning_introduce_wedding' | 'memorial_ceremony_funeral' | 'moving' | 'courier_industry' | 'house_maid_cleaning_agency' | 're_tailoring_clothes' | 'training_institute_management' | 'tutoring_school' | 'music_calligraphy_abacus_classroom' | 'english_school' | 'tennis_yoga_judo_school' | 'culture_school' | 'seminar_planning_management' | 'hospital_clinic' | 'dental_clinic' | 'other_medical_services' | 'nursery' | 'nursing_home' | 'rehabilitation_support_services' | 'other_welfare' | 'visit_welfare_service' | 'recruitment_temporary_staffing' | 'life_related_recruitment_temporary_staffing' | 'car_maintenance_car_repair' | 'machinery_equipment_maintenance_repair' | 'cleaning_maintenance_building_management' | 'security' | 'other_services' | 'npo' | 'general_incorporated_association' | 'general_incorporated_foundation' | 'other_association'
  }

  head_count?: 0 | 1 | 2 | 3 | 13 | 14 | 15 | 18 | 16 | 17
  corporate_number?: string

  fiscal_years_attributes?: {
    use_industry_template?: number
    indirect_write_off_method?: number
    indirect_write_off_method_type?: number
    start_date?: string
    end_date?: string
    accounting_period?: number
    depreciation_fraction?: number
    return_code?: number
    tax_fraction?: number
  }

  doc_template?: {
    invoice_layout?: number
    invoice_style?: number
    amount_fraction?: number
  }

  txn_number_format?: 'not_used' | 'digits' | 'alnum'
  private_settlement?: number
}

export type itemParams = {
  company_id: number
  name: string
  shortcut1?: string
  shortcut2?: string
}

export type walletableCreateParams = {
  name: string
  type: 'bank_account' | 'credit_card' | 'wallet'
  company_id: number
  bank_id?: number
  group_name?: string
}

export type walletableUpdateParams = {
  name: string
  company_id: number
}

export type transferParams = {
  to_walletable_id: number
  to_walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  from_walletable_id: number
  from_walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  amount: number
  date: string
  company_id: number
  description?: string
}

export type walletTxnParams = {
  entry_side: 'income' | 'expense'
  description?: string
  amount: number
  walletable_id: number
  walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  date: string
  company_id: number
  balance?: number
}

export type expenseApplicationCreateParams = {
  company_id: number
  title: string
  issue_date: string
  description?: string
  editable_on_web?: boolean
  section_id?: number
  tag_ids?: number[]
  expense_application_lines: {
    transaction_date?: string
    description?: string
    amount?: number
    expense_application_line_template_id?: number
    receipt_id?: number
  }[]
}

export type expenseApplicationUpdateParams = {
  company_id: number
  title: string
  issue_date: string
  description?: string
  editable_on_web?: boolean
  section_id?: number
  tag_ids?: number[]
  expense_application_lines: {
    id?: number
    transaction_date?: string
    description?: string
    amount?: number
    expense_application_line_template_id?: number
    receipt_id?: number
  }[]
}

export type partnerCreateParams = {
  company_id: number
  name: string
  code?: string
  shortcut1?: string
  shortcut2?: string
  long_name?: string
  name_kana?: string
  default_title?: string
  phone?: string
  contact_name?: string
  email?: string
  payer_walletable_id?: number
  transfer_fee_handling_side?: 'payer' | 'payee'

  address_attributes?: {
    zipcode?: string
    prefecture_code?: number
    street_name1?: string
    street_name2?: string
  }

  partner_doc_setting_attributes?: {
    sending_method?: 'email' | 'posting' | 'email_and_posting'
  }

  partner_bank_account_attributes?: {
    bank_name?: string
    bank_name_kana?: string
    bank_code?: string
    branch_name?: string
    branch_kana?: string
    branch_code?: string
    account_type?: string
    account_number?: string
    long_account_name?: string
    account_name?: string
  }

  payment_term_attributes?: {
    cutoff_day?: number
    additional_months?: number
    fixed_day?: number
  }

  invoice_payment_term_attributes?: {
    cutoff_day?: number
    additional_months?: number
    fixed_day?: number
  }
}

export type partnerUpdateParams = {
  company_id: number
  name: string
  shortcut1?: string
  shortcut2?: string
  long_name?: string
  name_kana?: string
  default_title?: string
  phone?: string
  contact_name?: string
  email?: string
  payer_walletable_id?: number
  transfer_fee_handling_side?: 'payer' | 'payee'

  address_attributes?: {
    zipcode?: string
    prefecture_code?: number
    street_name1?: string
    street_name2?: string
  }

  partner_doc_setting_attributes?: {
    sending_method?: 'email' | 'posting' | 'email_and_posting'
  }

  partner_bank_account_attributes?: {
    bank_name?: string
    bank_name_kana?: string
    bank_code?: string
    branch_name?: string
    branch_kana?: string
    branch_code?: string
    account_type?: string
    account_number?: string
    long_account_name?: string
    account_name?: string
  }

  payment_term_attributes?: {
    cutoff_day?: number
    additional_months?: number
    fixed_day?: number
  }

  invoice_payment_term_attributes?: {
    cutoff_day?: number
    additional_months?: number
    fixed_day?: number
  }
}

export type receiptCreateParams = {
  company_id: number
  description?: string
  issue_date?: string
  receipt: Blob
}

export type receiptUpdateParams = {
  company_id: number
  description?: string
  issue_date: string
}

export type accountItemParams = {
  company_id: number

  account_item: {
    name: string
    shortcut?: string
    shortcut_num?: string
    tax_name: string
    group_name: string
    account_category: string
    corresponding_income_name: string
    corresponding_expense_name: string
    accumulated_dep_account_item_name?: string
    searchable?: number
    items?: {
      id?: number
    }[]
    partners?: {
      id?: number
    }[]
  }
}

export type accountItemsResponse = {
  account_items: {
    id: number
    name: string
    shortcut?: string
    shortcut_num?: string
    default_tax_id?: number
    default_tax_code: number
    account_category: string
    account_category_id: number
    categories: string[]
    available: boolean
    walletable_id: number
    group_name?: string
    corresponding_income_name?: string
    corresponding_income_id?: number
    corresponding_expense_name?: string
    corresponding_expense_id?: number
  }[]
}

export type accountItemResponse = {
  account_item: {
    id: number
    name: string
    company_id: number
    tax_code: number
    account_category: string
    account_category_id: number
    shortcut?: string
    shortcut_num?: string
    corresponding_type_expense: number
    corresponding_type_income: number
    searchable: number
    accumulated_dep_account_item_name?: string
    items?: {
      id: number
      name: string
    }[]
    partners?: {
      id: number
      name: string
    }[]
    available: boolean
    walletable_id: number
    group_name?: string
    corresponding_income_name?: string
    corresponding_income_id?: number
    corresponding_expense_name?: string
    corresponding_expense_id?: number
  }
}

export type bankResponse = {
  bank: {
    id: number
    name?: string
    type?: 'bank_account' | 'credit_card' | 'wallet'
    name_kana?: string
  }
}

export type journalsResponse = {
  journals: {
    id: number
    messages?: string
    company_id: number
    download_type?: 'csv' | 'generic' | 'pdf'
    start_date?: string
    end_date?: string
    visible_tags?: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
    status_url?: string
  }
}

export type journalStatusResponse = {
  journals: {
    id: number
    company_id: number
    download_type: 'csv' | 'generic' | 'pdf'
    status: 'enqueued' | 'working' | 'uploaded' | 'failed'
    start_date: string
    end_date: string
    visible_tags: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
    download_url?: string
  }
}

export type trialBsResponse = {
  trial_bs: {
    company_id: number
    up_to_date: boolean
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    adjustment?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      partners?: {
        id: number
        name?: string
        opening_balance?: number
        debit_amount?: number
        credit_amount?: number
        closing_balance?: number
        composition_ratio?: number
      }[]
      items?: {
        id: number
        name?: string
        opening_balance?: number
        debit_amount?: number
        credit_amount?: number
        closing_balance?: number
        composition_ratio?: number
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      opening_balance?: number
      debit_amount?: number
      credit_amount?: number
      closing_balance?: number
      composition_ratio?: number
    }[]
  }
}

export type trialBsTwoYearsResponse = {
  trial_bs_two_years: {
    company_id: number
    up_to_date: boolean
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    adjustment?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      partners?: {
        id: number
        name?: string
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      items?: {
        id: number
        name?: string
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      last_year_closing_balance?: number
      closing_balance?: number
      year_on_year?: number
    }[]
  }
}

export type trialBsThreeYearsResponse = {
  trial_bs_three_years: {
    company_id: number
    up_to_date: boolean
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    adjustment?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      partners?: {
        id: number
        name?: string
        two_years_before_closing_balance?: number
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      items?: {
        id: number
        name?: string
        two_years_before_closing_balance?: number
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      two_years_before_closing_balance?: number
      last_year_closing_balance?: number
      closing_balance?: number
      year_on_year?: number
    }[]
  }
}

export type trialPlResponse = {
  trial_pl: {
    company_id: number
    up_to_date: boolean
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    section_id?: number
    adjustment?: 'only' | 'without'
    cost_allocation?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      partners?: {
        id: number
        name?: string
        opening_balance?: number
        debit_amount?: number
        credit_amount?: number
        closing_balance?: number
        composition_ratio?: number
      }[]
      items?: {
        id: number
        name?: string
        opening_balance?: number
        debit_amount?: number
        credit_amount?: number
        closing_balance?: number
        composition_ratio?: number
      }[]
      sections?: {
        id: number
        name?: string
        opening_balance?: number
        debit_amount?: number
        credit_amount?: number
        closing_balance?: number
        composition_ratio?: number
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      opening_balance?: number
      debit_amount?: number
      credit_amount?: number
      closing_balance?: number
      composition_ratio?: number
    }[]
  }
}

export type trialPlTwoYearsResponse = {
  trial_pl_two_years: {
    company_id: number
    up_to_date: boolean
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    section_id?: number
    adjustment?: 'only' | 'without'
    cost_allocation?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      partners?: {
        id: number
        name?: string
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      items?: {
        id: number
        name?: string
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      sections?: {
        id: number
        name?: string
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      last_year_closing_balance?: number
      closing_balance?: number
      year_on_year?: number
    }[]
  }
}

export type trialPlThreeYearsResponse = {
  trial_pl_three_years: {
    company_id: number
    up_to_date: boolean
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    section_id?: number
    adjustment?: 'only' | 'without'
    cost_allocation?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      partners?: {
        id: number
        name?: string
        two_years_before_closing_balance?: number
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      items?: {
        id: number
        name?: string
        two_years_before_closing_balance?: number
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      sections?: {
        id: number
        name?: string
        two_years_before_closing_balance?: number
        last_year_closing_balance?: number
        closing_balance?: number
        year_on_year?: number
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      two_years_before_closing_balance?: number
      last_year_closing_balance?: number
      closing_balance?: number
      year_on_year?: number
    }[]
  }
}

export type trialPlSectionsResponse = {
  trial_pl_sections: {
    company_id: number
    up_to_date: boolean
    section_ids: string
    fiscal_year?: number
    start_month?: number
    end_month?: number
    start_date?: string
    end_date?: string
    account_item_display_type?: 'account_item' | 'group'
    breakdown_display_type?: 'partner' | 'item' | 'account_item'
    partner_id?: number
    partner_code?: string
    item_id?: number
    adjustment?: 'only' | 'without'
    cost_allocation?: 'only' | 'without'
    created_at?: string
    balances: {
      account_item_id?: number
      account_item_name?: string
      sections?: {
        id: number
        name?: string
        closing_balance?: number
        partners?: {
          id: number
          name?: string
          closing_balance?: number
        }[]
        items?: {
          id: number
          name?: string
          closing_balance?: number
        }[]
      }[]
      account_category_id?: number
      account_category_name?: string
      total_line?: boolean
      hierarchy_level?: number
      parent_account_category_id?: number
      parent_account_category_name?: string
      closing_balance?: number
    }[]
  }
}

export type sectionParams = {
  company_id: number
  name: string
  long_name?: string
  shortcut1?: string
  shortcut2?: string
  parent_id?: number
}

export type sectionResponse = {
  section: {
    id: number
    name: string
    long_name?: string
    company_id: number
    shortcut1?: string
    shortcut2?: string
  }
}

export type dealCreateResponse = {
  deal: {
    id: number
    company_id: number
    issue_date: string
    due_date?: string
    amount: number
    due_amount?: number
    type?: 'income' | 'expense'
    partner_id: number
    partner_code?: string
    ref_number?: string
    status: 'unsettled' | 'settled'
    details?: {
      id: number
      account_item_id: number
      tax_id?: number
      tax_code: number
      item_id?: number
      section_id?: number
      tag_ids?: number[]
      segment_1_tag_id?: number
      segment_2_tag_id?: number
      segment_3_tag_id?: number
      amount: number
      vat: number
      description?: string
      entry_side: 'credit' | 'debit'
    }[]
    payments?: {
      id: number
      date: string
      from_walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
      from_walletable_id?: number
      amount: number
    }[]
  }
}

export type dealResponse = {
  deal: {
    id: number
    company_id: number
    issue_date: string
    due_date?: string
    amount: number
    due_amount?: number
    type?: 'income' | 'expense'
    partner_id: number
    partner_code?: string
    ref_number?: string
    status: 'unsettled' | 'settled'
    details?: {
      id: number
      account_item_id: number
      tax_id?: number
      tax_code: number
      item_id?: number
      section_id?: number
      tag_ids?: number[]
      segment_1_tag_id?: number
      segment_2_tag_id?: number
      segment_3_tag_id?: number
      amount: number
      vat: number
      description?: string
      entry_side: 'credit' | 'debit'
    }[]
    renews?: {
      id: number
      update_date: string
      renew_target_id: number
      renew_target_type: 'detail' | 'accrual' | 'renew'
      details: {
        id: number
        entry_side: 'credit' | 'debit'
        account_item_id: number
        tax_code: number
        item_id?: number
        section_id?: number
        tag_ids: number[]
        segment_1_tag_id?: number
        segment_2_tag_id?: number
        segment_3_tag_id?: number
        amount: number
        vat: number
        description?: string
      }[]
    }[]
    payments?: {
      id: number
      date: string
      from_walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
      from_walletable_id?: number
      amount: number
    }[]
    receipts?: {
      id: number
      status: 'unconfirmed' | 'confirmed' | 'deleted' | 'ignored'
      description?: string
      mime_type: string
      issue_date?: string
      origin: 'unknown' | 'web' | 'mobile_camera' | 'mobile_album' | 'scansnap' | 'scannable' | 'dropbox' | 'mail' | 'safety_contact_file' | 'public_api'
      created_at: string
      file_src: string

      user: {
        id: number
        email: string
        display_name?: string
      }
    }[]
  }
}

export type selectablesIndexResponse = {
  account_categories?: {
    balance: 'expense' | 'income'
    org_code: 'personal' | 'corporate'
    role: string
    title: string
    desc?: string
    account_items: {
      id: number
      name?: string
      desc?: string
      help?: string
      shortcut?: string

      default_tax?: {
        tax_rate_5?: {
          id?: number
          name?: string
        }

        tax_rate_8?: {
          id?: number
          name?: string
        }
      }
    }[]
  }[]
  account_groups?: {
    id: number
    name: string
    account_structure_id: number
    account_category_id: number
    detail_type?: number
    index: number
    created_at?: string
    updated_at?: string
  }[]
}

export type itemResponse = {
  item: {
    id: number
    company_id: number
    name: string
    shortcut1?: string
    shortcut2?: string
  }
}

export type manualJournalResponse = {
  manual_journal: {
    id: number
    company_id: number
    issue_date: string
    adjustment: boolean
    txn_number: string
    details: {
      id: number
      entry_side: 'credit' | 'debit'
      account_item_id: number
      tax_code: number
      partner_id: number
      partner_name: string
      partner_code?: string
      partner_long_name: string
      item_id: number
      item_name: string
      section_id: number
      section_name: string
      tag_ids: number[]
      tag_names: string[]
      segment_1_tag_id?: number
      segment_1_tag_name?: number
      segment_2_tag_id?: number
      segment_2_tag_name?: number
      segment_3_tag_id?: number
      segment_3_tag_name?: number
      amount: number
      vat: number
      description: string
    }[]
  }
}

export type tagParams = {
  company_id: number
  name: string
  shortcut1?: string
  shortcut2?: string
}

export type tagResponse = {
  tag: {
    id: number
    company_id: number
    name: string
    shortcut1?: string
    shortcut2?: string
  }
}

export type companyUpdateResponse = {
  company: {
    id: number
    name: string
    name_kana: string
    display_name: string
    tax_at_source_calc_type: number
    contact_name: string
    head_count: number
    corporate_number: string
    txn_number_format: 'not_used' | 'digits' | 'alnum'
    default_wallet_account_id?: number
    private_settlement: boolean
    minus_format: number
    role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
    phone1: string
    phone2: string
    fax: string
    zipcode: string
    prefecture_code: number
    street_name1: string
    street_name2: string
    invoice_layout: number
    invoice_style: number
    amount_fraction: number
    industry_class: '' | 'agriculture_forestry_fisheries_ore' | 'construction' | 'manufacturing_processing' | 'it' | 'transportation_logistics' | 'retail_wholesale' | 'finance_insurance' | 'real_estate_rental' | 'profession' | 'design_production' | 'food' | 'lifestyle' | 'education' | 'medical_welfare' | 'other_services' | 'other'
    industry_code: '' | 'transport_delivery' | 'delivery' | 'other_transportation_logistics'
    workflow_setting: 'enable' | 'disable'
    fiscal_years?: {
      use_industry_template: boolean
      indirect_write_off_method: boolean
      start_date?: string
      end_date?: string
      depreciation_record_method: number
      tax_method: number
      sales_tax_business_code: number
      tax_fraction: number
      tax_account_method: number
      return_code: number
    }[]
  }
}

export type companyIndexResponse = {
  companies: {
    id: number
    name: string
    name_kana: string
    display_name: string
    role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
  }[]
}

export type companyResponse = {
  company: {
    id: number
    name: string
    name_kana: string
    display_name: string
    tax_at_source_calc_type: number
    contact_name: string
    head_count: number
    corporate_number: string
    txn_number_format: 'not_used' | 'digits' | 'alnum'
    default_wallet_account_id?: number
    private_settlement: boolean
    minus_format: number
    role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
    phone1: string
    phone2: string
    fax: string
    zipcode: string
    prefecture_code: number
    street_name1: string
    street_name2: string
    invoice_layout: number
    invoice_style: number
    amount_fraction: number
    industry_class: '' | 'agriculture_forestry_fisheries_ore' | 'construction' | 'manufacturing_processing' | 'it' | 'transportation_logistics' | 'retail_wholesale' | 'finance_insurance' | 'real_estate_rental' | 'profession' | 'design_production' | 'food' | 'lifestyle' | 'education' | 'medical_welfare' | 'other_services' | 'other'
    industry_code: '' | 'transport_delivery' | 'delivery' | 'other_transportation_logistics'
    workflow_setting: 'enable' | 'disable'
    use_partner_code: boolean
    fiscal_years: fiscal_years[]
  }
}

export type unauthorizedError = {
  message?: string
  messages?: string
}

export type forbiddenError = {
  message?: string
  messages?: string
}

export type badRequestError = {
  status_code?: number
  errors?: {
    type: 'status' | 'validation' | 'error'
  }[]
}

export type badRequestNotFoundError = {
  status_code?: number
  errors?: {
    type: 'status' | 'validation' | 'error'
  }[]
}

export type tooManyRequestsError = {
  status_code: number

  meta: {
    limit: number
    period?: number
    remaining: number
    reset: string
  }
}

export type internalServerError = {
  status_code?: number
  errors?: {
    type: 'status' | 'validation' | 'error'
  }[]
}

export type serviceUnavailableError = {
  status_code: number
  errors: {
    messages: string[]
    type: 'status' | 'error'
  }[]
}

export type partnersResponse = {
  partners: {
    id: number
    code: string
    company_id: number
    name: string
    shortcut1?: string
    shortcut2?: string
    long_name?: string
    name_kana?: string
    default_title?: string
    phone?: string
    contact_name?: string
    email?: string
    payer_walletable_id?: number
    transfer_fee_handling_side?: 'payer' | 'payee'
    'address_attributes[zipcode]'?: string
    'address_attributes[prefecture_code]'?: number
    'address_attributes[street_name1]'?: string
    'address_attributes[street_name2]'?: string
    'partner_doc_setting_attributes[sending_method]'?: 'mail' | 'posting' | 'main_and_posting'
    'partner_bank_account_attributes[bank_name]'?: string
    'partner_bank_account_attributes[bank_name_kana]'?: string
    'partner_bank_account_attributes[bank_code]'?: string
    'partner_bank_account_attributes[branch_name]'?: string
    'partner_bank_account_attributes[branch_kana]'?: string
    'partner_bank_account_attributes[branch_code]'?: string
    'partner_bank_account_attributes[account_type]'?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other'
    'partner_bank_account_attributes[account_number]'?: string
    'partner_bank_account_attributes[account_name]'?: string
    'partner_bank_account_attributes[long_account_name]'?: string
  }[]
}

export type partnerResponse = {
  partner: {
    id: number
    code: string
    company_id: number
    name: string
    shortcut1?: string
    shortcut2?: string
    long_name?: string
    name_kana?: string
    default_title?: string
    phone?: string
    contact_name?: string
    email?: string
    payer_walletable_id?: number
    transfer_fee_handling_side?: 'payer' | 'payee'
    'address_attributes[zipcode]'?: string
    'address_attributes[prefecture_code]'?: number
    'address_attributes[street_name1]'?: string
    'address_attributes[street_name2]'?: string
    'partner_doc_setting_attributes[sending_method]'?: 'email' | 'posting' | 'email_and_posting'
    'partner_bank_account_attributes[bank_name]'?: string
    'partner_bank_account_attributes[bank_name_kana]'?: string
    'partner_bank_account_attributes[bank_code]'?: string
    'partner_bank_account_attributes[branch_name]'?: string
    'partner_bank_account_attributes[branch_kana]'?: string
    'partner_bank_account_attributes[branch_code]'?: string
    'partner_bank_account_attributes[account_type]'?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other'
    'partner_bank_account_attributes[account_number]'?: string
    'partner_bank_account_attributes[account_name]'?: string
    'partner_bank_account_attributes[long_account_name]'?: string
    'payment_term_attributes[cutoff_day]'?: number
    'payment_term_attributes[additional_months]'?: number
    'payment_term_attributes[fixed_day]'?: number
    'invoice_payment_term_attributes[cutoff_day]'?: number
    'invoice_payment_term_attributes[additional_months]'?: number
    'invoice_payment_term_attributes[fixed_day]'?: number
  }
}

export type taxResponse = {
  tax: {
    code: number
    name: string
    name_ja: string
  }
}

export type walletableResponse = {
  walletable: {
    id: number
    name: string
    bank_id: number
    type: 'bank_account' | 'credit_card' | 'wallet'
    last_balance?: number
    walletable_balance?: number

    meta?: {
      up_to_date?: boolean
    }
  }
}

export type walletableCreateResponse = {
  id: number
  name: string
  bank_id: number
  type: 'bank_account' | 'credit_card' | 'wallet'
}

export type walletTxnResponse = {
  wallet_txn: {
    id: number
    company_id: number
    date: string
    amount: number
    due_amount: number
    balance: number
    entry_side: 'income' | 'expense'
    walletable_type: 'bank_account' | 'credit_card' | 'wallet'
    walletable_id: number
    description: string
    status: number
  }
}

export type transferResponse = {
  transfer: {
    id: number
    company_id: number
    amount: number
    date: string
    from_walletable_type: 'bank_account' | 'wallet' | 'credit_card'
    from_walletable_id: number
    to_walletable_type: 'bank_account' | 'wallet' | 'credit_card'
    to_walletable_id: number
    description: string
  }
}

export type userParams = {
  display_name?: string
  first_name?: string
  last_name?: string
  first_name_kana?: string
  last_name_kana?: string
}

export type userResponse = {
  user?: {
    id: number
    email: string
    display_name?: string
    first_name?: string
    last_name?: string
    first_name_kana?: string
    last_name_kana?: string
  }
}

export type meResponse = {
  user: {
    id: number
    email: string
    display_name?: string
    first_name?: string
    last_name?: string
    first_name_kana?: string
    last_name_kana?: string
    companies?: {
      id: number
      display_name: string
      role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
      use_custom_role: boolean
    }[]
  }
}

export type userCapability = {
  read?: boolean
  create?: boolean
  update?: boolean
  destroy?: boolean
}

export type receiptResponse = {
  receipt: {
    id: number
    status: 'unconfirmed' | 'confirmed' | 'deleted' | 'ignored'
    description?: string
    mime_type: string
    issue_date?: string
    origin: 'unknown' | 'web' | 'mobile_camera' | 'mobile_album' | 'scansnap' | 'scannable' | 'dropbox' | 'mail' | 'safety_contact_file' | 'public_api'
    created_at: string
    file_src: string

    user: {
      id: number
      email: string
      display_name?: string
    }
  }
}

export type fiscal_years = {
  use_industry_template: boolean
  indirect_write_off_method: boolean
  start_date?: string
  end_date?: string
  depreciation_record_method: number
  tax_method: number
  sales_tax_business_code: number
  tax_fraction: number
  tax_account_method: number
  return_code: number
}

export type expenseApplicationResponse = {
  expense_application: {
    id: number
    company_id: number
    title: string
    issue_date: string
    description?: string
    editable_on_web: boolean
    total_amount?: number
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    section_id?: number
    tag_ids?: number[]
    expense_application_lines: {
      id: number
      transaction_date?: string
      description?: string
      amount?: number
      expense_application_line_template_id?: number
      receipt_id?: number
    }[]
    deal_id: number
    deal_status: 'settled' | 'unsettled'
  }
}

export type expenseApplicationLineTemplateResponse = {
  expense_application_line_template: {
    id: number
    name: string
    account_item_id?: number
    account_item_name: string
    tax_code?: number
    tax_name: string
    description?: string
    line_description?: string
  }
}

export type approvalRequestParams = {
  company_id: number
  request_form_id: number
  approval_flow_route_id: number
  approver_id?: number
  title: string
  request_items?: {
    id?: number
    type?: 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
    value?: string
  }[]
}

export type generalApplicationCreateParams = {
  company_id: number
  application_date: string
  approval_flow_route_id: number
  form_id: number
  approver_id?: number
  draft: boolean
  parent_id?: number
  request_items: {
    id?: number
    type?: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
    value?: string
  }[]
}

export type generalApplicationUpdateParams = {
  company_id: number
  application_date: string
  approval_flow_route_id: number
  approver_id?: number
  draft: boolean
  request_items: {
    id?: number
    type?: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
    value?: string
  }[]
}

export type generalApplicationActionCreateParams = {
  company_id: number
  approval_action: 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback' | 'force_feedback'
  next_approver_id?: number
}

export type renewCreateParams = {
  company_id: number
  update_date: string
  renew_target_id: number
  details: {
    account_item_id: number
    tax_code: number
    amount: number
    vat?: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
    description?: string
  }[]
}

export type renewUpdateParams = {
  company_id: number
  update_date: string
  details: {
    account_item_id: number
    tax_code: number
    amount: number
    vat?: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
    description?: string
  }[]
}

export type expenseApplicationLineTemplateParams = {
  company_id: number
  name: string
  account_items_id?: number
  item_id?: number
  tax_code: number
  description?: string
  line_description?: string
}

export type approvalRequestResponse = {
  approval_request: {
    id: number
    company_id: number
    application_date: string
    title: string
    applicant_id: number
    approver_id: number
    application_number: string
    status: 'draft'
    request_items: {
      id: number
      type: string
      value: string
    }[]
  }
}

export type generalApplicationsIndexResponse = {
  general_applications: {
    id: number
    company_id: number
    application_date: string
    title: string
    applicant_id: number
    approver_id: number
    application_number: string
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    request_items: {
      id: number
      type: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
      value: string
    }[]
    form_id: number
    approval_flow_route_id: number
  }[]
}

export type generalApplicationResponse = {
  general_application: {
    id: number
    company_id: number
    application_date: string
    title: string
    applicant_id: number
    approver_id: number
    application_number: string
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    request_items: {
      id: number
      type: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
      value: string
    }[]
    form_id: number
    approval_flow_route_id: number
    last_approver_id: number
    last_approved_at: string
    comments: {
      comment: string
      user_id: number
      posted_at: string
    }[]
    approval_flow_logs: {
      action: 'apply' | 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback'
      user_id: number
      updated_at: string
    }[]
  }
}

export type generalApplicationFormResponse = {
  general_application_form: {
    id: number
    company_id: number
    name: string
    description: string
    status: 'draft' | 'active' | 'deleted'
    created_date: string
    form_order: number
    parts?: {
      id: number
      order?: number
      type?: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
      label?: string
      annotation?: string
      required?: boolean
      values?: {
        name: string
        order: number
      }[]
      max_amount?: number
      min_amount?: number
    }[]
    route_setting_count: number
  }
}

export type approvalFlowRouteResponse = {
  approval_flow_route: {
    id: number
    name?: string
    description?: string
    user_id?: number
    definition_system?: boolean
    is_in_progress?: boolean
    first_step_id?: number
    usages?: ('TxnApproval' | 'ExpenseApplication' | 'PaymentRequest' | 'ApprovalRequest' | 'DocApproval')[]
  }
}

export type segmentTagResponse = {
  segment_tag: {
    id: number
    name: string
    description: string
    shortcut1: string
    shortcut2: string
  }
}

export type segmentTagParams = {
  company_id: number
  name: string
  description?: string
  shortcut1?: string
  shortcut2?: string
}

export type invoiceResponse = {
  invoice: {
    id: number
    company_id: number
    issue_date: string
    partner_id: number
    partner_code?: string
    invoice_number: string
    title?: string
    due_date?: string
    total_amount: number
    total_vat?: number
    sub_total?: number
    booking_date?: string
    description?: string
    invoice_status: 'draft' | 'applying' | 'remanded' | 'rejected' | 'approved' | 'issued'
    payment_status?: '' | 'unsettled' | 'settled'
    payment_date?: string
    web_published_at?: string
    web_downloaded_at?: string
    web_confirmed_at?: string
    mail_sent_at?: string
    posting_status: '' | 'unrequested' | 'preview_registered' | 'preview_failed' | 'ordered' | 'order_failed' | 'printing' | 'canceled' | 'posted'
    partner_name?: string
    partner_long_name?: string
    partner_title?: string
    partner_zipcode?: string
    partner_prefecture_code?: number
    partner_prefecture_name?: string
    partner_address1?: string
    partner_address2?: string
    partner_contact_info?: string
    company_name: string
    company_zipcode?: string
    company_prefecture_code?: number
    company_prefecture_name?: string
    company_address1?: string
    company_address2?: string
    company_contact_info?: string
    payment_type: '' | 'transfer' | 'direct_debit'
    payment_bank_info?: string
    message?: string
    notes?: string
    invoice_layout: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    deal_id?: number
    invoice_contents?: {
      id: number
      order: number
      type: 'normal' | 'discount' | 'text'
      qty: number
      unit: string
      unit_price: number
      amount: number
      vat: number
      reduced_vat: boolean
      description: string
      account_item_id: number
      account_item_name: string
      tax_code: number
      item_id: number
      item_name: string
      section_id: number
      section_name: string
      tag_ids: number[]
      tag_names: string[]
      segment_1_tag_id?: number
      segment_1_tag_name?: string
      segment_2_tag_id?: number
      segment_2_tag_name?: string
      segment_3_tag_id?: number
      segment_3_tag_name?: string
    }[]

    total_amount_per_vat_rate: {
      vat_5: number
      vat_8: number
      reduced_vat_8: number
      vat_10: number
    }
  }
}

export type invoiceCreateParams = {
  company_id: number
  issue_date?: string
  partner_id?: number
  partner_code?: string
  invoice_number?: string
  title?: string
  due_date?: string
  booking_date?: string
  description?: string
  invoice_status?: 'draft' | 'issue'
  partner_name?: string
  partner_title?: string
  partner_contact_info?: string
  partner_zipcode?: string
  partner_prefecture_code?: number
  partner_address1?: string
  partner_address2?: string
  company_name?: string
  company_zipcode?: string
  company_prefecture_code?: number
  company_address1?: string
  company_address2?: string
  company_contact_info?: string
  payment_type?: 'transfer' | 'direct_debit'
  payment_bank_info?: string
  use_virtual_transfer_account?: 'not_use' | 'use'
  message?: string
  notes?: string
  invoice_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
  tax_entry_method?: 'inclusive' | 'exclusive'
  invoice_contents?: {
    order: number
    type: 'normal' | 'discount' | 'text'
    qty?: number
    unit?: string
    unit_price?: number
    vat?: number
    description?: string
    account_item_id?: number
    tax_code?: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
  }[]
}

export type invoiceUpdateParams = {
  company_id: number
  issue_date?: string
  partner_id?: number
  partner_code?: string
  invoice_number?: string
  title?: string
  due_date?: string
  booking_date?: string
  description?: string
  invoice_status?: 'draft' | 'issue'
  partner_name?: string
  partner_title?: string
  partner_contact_info?: string
  partner_zipcode?: string
  partner_prefecture_code?: number
  partner_address1?: string
  partner_address2?: string
  company_name?: string
  company_zipcode?: string
  company_prefecture_code?: number
  company_address1?: string
  company_address2?: string
  company_contact_info?: string
  payment_type?: 'transfer' | 'direct_debit'
  payment_bank_info?: string
  use_virtual_transfer_account?: 'not_use' | 'use'
  message?: string
  notes?: string
  invoice_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
  tax_entry_method?: 'inclusive' | 'exclusive'
  invoice_contents?: {
    id?: number
    order: number
    type: 'normal' | 'discount' | 'text'
    qty?: number
    unit?: string
    unit_price?: number
    vat?: number
    description?: string
    account_item_id?: number
    tax_code?: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
  }[]
}

export type quotationResponse = {
  quotation: {
    id: number
    company_id: number
    issue_date: string
    partner_id: number
    partner_code?: string
    quotation_number: string
    title?: string
    total_amount: number
    total_vat?: number
    sub_total?: number
    description?: string
    quotation_status: 'unsubmitted' | 'submitted' | 'all'
    web_published_at?: string
    web_downloaded_at?: string
    web_confirmed_at?: string
    mail_sent_at?: string
    partner_name?: string
    partner_display_name?: string
    partner_title: '御中' | '様' | '(空白)'
    partner_zipcode?: string
    partner_prefecture_code?: number
    partner_prefecture_name?: string
    partner_address1?: string
    partner_address2?: string
    partner_contact_info?: string
    company_name: string
    company_zipcode?: string
    company_prefecture_code?: number
    company_prefecture_name?: string
    company_address1?: string
    company_address2?: string
    company_contact_info?: string
    message?: string
    notes?: string
    quotation_layout: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    quotation_contents?: {
      id: number
      order: number
      type: 'normal' | 'discount' | 'text'
      qty: number
      unit: string
      unit_price: number
      amount: number
      vat: number
      reduced_vat: boolean
      description: string
      account_item_id: number
      account_item_name: string
      tax_code: number
      item_id: number
      item_name: string
      section_id: number
      section_name: string
      tag_ids: number[]
      tag_names: string[]
      segment_1_tag_id?: number
      segment_1_tag_name?: string
      segment_2_tag_id?: number
      segment_2_tag_name?: string
      segment_3_tag_id?: number
      segment_3_tag_name?: string
    }[]

    total_amount_per_vat_rate: {
      vat_5: number
      vat_8: number
      reduced_vat_8: number
      vat_10: number
    }
  }
}

export type quotationCreateParams = {
  company_id: number
  issue_date?: string
  partner_id?: number
  partner_code?: string
  quotation_number?: string
  title?: string
  description?: string
  quotation_status?: 'unsubmitted' | 'submitted'
  partner_display_name: string
  partner_title: string
  partner_contact_info?: string
  partner_zipcode?: string
  partner_prefecture_code?: number
  partner_address1?: string
  partner_address2?: string
  company_name?: string
  company_zipcode?: string
  company_prefecture_code?: number
  company_address1?: string
  company_address2?: string
  company_contact_info?: string
  message?: string
  notes?: string
  quotation_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
  tax_entry_method?: 'inclusive' | 'exclusive'
  quotation_contents?: {
    order: number
    type: 'normal' | 'discount' | 'text'
    qty?: number
    unit?: string
    unit_price?: number
    vat?: number
    description?: string
    account_item_id?: number
    tax_code?: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
  }[]
}

export type quotationUpdateParams = {
  company_id: number
  issue_date?: string
  partner_id?: number
  partner_code?: string
  quotation_number?: string
  title?: string
  description?: string
  quotation_status?: 'unsubmitted' | 'submitted'
  partner_display_name: string
  partner_title: string
  partner_contact_info?: string
  partner_zipcode?: string
  partner_prefecture_code?: number
  partner_address1?: string
  partner_address2?: string
  company_name?: string
  company_zipcode?: string
  company_prefecture_code?: number
  company_address1?: string
  company_address2?: string
  company_contact_info?: string
  message?: string
  notes?: string
  quotation_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
  tax_entry_method?: 'inclusive' | 'exclusive'
  quotation_contents?: {
    id?: number
    order: number
    type: 'normal' | 'discount' | 'text'
    qty?: number
    unit?: string
    unit_price?: number
    vat?: number
    description?: string
    account_item_id?: number
    tax_code?: number
    item_id?: number
    section_id?: number
    tag_ids?: number[]
    segment_1_tag_id?: number
    segment_2_tag_id?: number
    segment_3_tag_id?: number
  }[]
}

export type companiesPlanResponse = {
  id: number
  plan: 'non_charged' | 'starter' | 'standard' | 'premium' | 'minimum' | 'basic' | 'professional' | 'enterprise'
  org_code: 'personal' | 'corporate'
}
