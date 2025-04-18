/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../../lib/session/session';
import {queueMockResponse} from '../../../../lib/__tests__/test-helper';
import {testConfig} from '../../../../lib/__tests__/test-config';
import {ApiVersion} from '../../../../lib/types';
import {shopifyApi} from '../../../../lib';

import {restResources} from '../../2025-04';

describe('Fulfillment resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const session = new Session({
    id: '1234',
    shop: domain,
    state: '1234',
    isOnline: true,
  });
  session.accessToken = 'this_is_a_test_token';

  it('test_1', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillments": [{"id": 255858046, "order_id": 450789469, "status": "failure", "created_at": "2025-04-02T11:38:15-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:15-05:00", "tracking_company": "USPS", "shipment_status": null, "location_id": 655441491, "origin_address": null, "line_items": [{"id": 466157049, "variant_id": 39072856, "title": "IPod Nano - 8gb", "quantity": 1, "sku": "IPOD2008GREEN", "variant_title": "green", "vendor": null, "fulfillment_service": "manual", "product_id": 632910392, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "IPod Nano - 8gb - green", "variant_inventory_management": "shopify", "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "product_exists": true, "fulfillable_quantity": 0, "grams": 200, "price": "199.00", "total_discount": "0.00", "fulfillment_status": null, "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [{"amount": "3.34", "discount_application_index": 0, "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}}], "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "duties": [], "tax_lines": [{"price": "3.98", "rate": 0.06, "title": "State Tax", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "channel_liable": null}], "fulfillment_line_item_id": 225088298}], "tracking_number": "1Z1234512345123456", "tracking_numbers": ["1Z1234512345123456"], "tracking_url": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456", "tracking_urls": ["https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456"], "receipt": {"testcase": true, "authorization": "123456"}, "name": "#1001.0", "admin_graphql_api_id": "gid://shopify/Fulfillment/255858046"}]}));

    await shopify.rest.Fulfillment.all({
      session: session,
      order_id: 450789469,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/orders/450789469/fulfillments.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillments": [{"id": 1069019878, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:43-05:00", "service": "shipwire-app", "updated_at": "2025-04-02T11:38:43-05:00", "tracking_company": "my-custom-shipping-company", "shipment_status": null, "location_id": 24826418, "origin_address": null, "line_items": [{"id": 518995019, "variant_id": 49148385, "title": "IPod Nano - 8gb", "quantity": 1, "sku": "IPOD2008RED", "variant_title": "red", "vendor": null, "fulfillment_service": "shipwire-app", "product_id": 632910392, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "IPod Nano - 8gb - red", "variant_inventory_management": "shopify", "properties": [], "product_exists": true, "fulfillable_quantity": 0, "grams": 200, "price": "199.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [{"amount": "3.33", "discount_application_index": 0, "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}}], "admin_graphql_api_id": "gid://shopify/LineItem/518995019", "duties": [], "tax_lines": [{"price": "3.98", "rate": 0.06, "title": "State Tax", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "channel_liable": null}], "fulfillment_line_item_id": 1024374829}], "tracking_number": "123456789", "tracking_numbers": ["123456789"], "tracking_url": "http://my-custom-shipping-company.shopifyapps.com/track/123456", "tracking_urls": ["http://my-custom-shipping-company.shopifyapps.com/track/123456", "http://my-custom-shipping-company.shopifyapps.com/track/789012"], "receipt": {}, "name": "#1001.1", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019878"}]}));

    await shopify.rest.Fulfillment.all({
      session: session,
      order_id: 450789469,
      since_id: "255858046",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/orders/450789469/fulfillments.json',
      query: 'since_id=255858046',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillments": [{"id": 1069019880, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:15-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:15-05:00", "tracking_company": "UPS", "shipment_status": null, "location_id": 24826418, "origin_address": {"address1": "150 Elgin St", "city": "Ottawa", "zip": "K2P 1L4", "province_code": "ON", "country_code": "CA"}, "line_items": [{"id": 1071823219, "variant_id": 43729076, "title": "Draft", "quantity": 1, "sku": "draft-151", "variant_title": "151cm", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 108828309, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Draft - 151cm", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 1, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823219", "tax_lines": []}], "tracking_number": "#\u26201\u2622\n---\n4321\n", "tracking_numbers": ["#\u26201\u2622\n---\n4321\n"], "tracking_url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=#\u26201\u2622---4321", "tracking_urls": ["https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=#\u26201\u2622---4321"], "receipt": {}, "name": "#1001.1", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019880"}]}));

    await shopify.rest.Fulfillment.all({
      session: session,
      fulfillment_order_id: 1046000819,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/fulfillment_orders/1046000819/fulfillments.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Fulfillment.count({
      session: session,
      order_id: 450789469,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/orders/450789469/fulfillments/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_5', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"id": 255858046, "order_id": 450789469, "status": "failure", "created_at": "2025-04-02T11:38:15-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:15-05:00", "tracking_company": "USPS", "shipment_status": null, "location_id": 655441491, "origin_address": null, "line_items": [{"id": 466157049, "variant_id": 39072856, "title": "IPod Nano - 8gb", "quantity": 1, "sku": "IPOD2008GREEN", "variant_title": "green", "vendor": null, "fulfillment_service": "manual", "product_id": 632910392, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "IPod Nano - 8gb - green", "variant_inventory_management": "shopify", "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "product_exists": true, "fulfillable_quantity": 1, "grams": 200, "price": "199.00", "total_discount": "0.00", "fulfillment_status": null, "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [{"amount": "3.34", "discount_application_index": 0, "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}}], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "tax_lines": [{"title": "State Tax", "price": "3.98", "rate": 0.06, "channel_liable": null, "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}}]}], "tracking_number": "1Z1234512345123456", "tracking_numbers": ["1Z1234512345123456"], "tracking_url": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456", "tracking_urls": ["https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456"], "receipt": {"testcase": true, "authorization": "123456"}, "name": "#1001.0", "admin_graphql_api_id": "gid://shopify/Fulfillment/255858046"}}));

    await shopify.rest.Fulfillment.find({
      session: session,
      order_id: 450789469,
      id: 255858046,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/orders/450789469/fulfillments/255858046.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_6', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"id": 1069019877, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:43-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:43-05:00", "tracking_company": null, "shipment_status": null, "location_id": 24826418, "origin_address": null, "line_items": [{"id": 1071823216, "variant_id": 389013007, "title": "Crafty Shoes - Red", "quantity": 1, "sku": "crafty_shoes_red", "variant_title": "Small", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 910489600, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Crafty Shoes - Red - Small", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 0, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823216", "tax_lines": []}], "tracking_number": "MS1562678", "tracking_numbers": ["MS1562678"], "tracking_url": "https://www.my-shipping-company.com?tracking_number=MS1562678", "tracking_urls": ["https://www.my-shipping-company.com?tracking_number=MS1562678"], "receipt": {}, "name": "#1001.2", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019877"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.line_items_by_fulfillment_order = [
      {
        "fulfillment_order_id": 1046000816
      }
    ];
    fulfillment.tracking_info = {
      "number": "MS1562678",
      "url": "https://www.my-shipping-company.com?tracking_number=MS1562678"
    };
    await fulfillment.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments.json',
      query: '',
      headers,
      data: { "fulfillment": {"line_items_by_fulfillment_order": [{"fulfillment_order_id": 1046000816}], "tracking_info": {"number": "MS1562678", "url": "https://www.my-shipping-company.com?tracking_number=MS1562678"}} }
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"id": 1069019871, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:40-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:40-05:00", "tracking_company": "UPS", "shipment_status": null, "location_id": 24826418, "origin_address": null, "line_items": [{"id": 1071823210, "variant_id": 389013007, "title": "Crafty Shoes - Red", "quantity": 1, "sku": "crafty_shoes_red", "variant_title": "Small", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 910489600, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Crafty Shoes - Red - Small", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 0, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823210", "tax_lines": []}], "tracking_number": "1Z001985YW99744790", "tracking_numbers": ["1Z001985YW99744790"], "tracking_url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790", "tracking_urls": ["https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790"], "receipt": {}, "name": "#1001.2", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019871"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.line_items_by_fulfillment_order = [
      {
        "fulfillment_order_id": 1046000813
      }
    ];
    fulfillment.tracking_info = {
      "number": "1Z001985YW99744790"
    };
    await fulfillment.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments.json',
      query: '',
      headers,
      data: { "fulfillment": {"line_items_by_fulfillment_order": [{"fulfillment_order_id": 1046000813}], "tracking_info": {"number": "1Z001985YW99744790"}} }
    }).toMatchMadeHttpRequest();
  });

  it('test_8', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"id": 1069019873, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:41-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:41-05:00", "tracking_company": null, "shipment_status": null, "location_id": 24826418, "origin_address": null, "line_items": [{"id": 1071823212, "variant_id": 389013007, "title": "Crafty Shoes - Red", "quantity": 1, "sku": "crafty_shoes_red", "variant_title": "Small", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 910489600, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Crafty Shoes - Red - Small", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 0, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823212", "tax_lines": []}], "tracking_number": "MS1562678", "tracking_numbers": ["MS1562678"], "tracking_url": "https://www.my-shipping-company.com?tracking=MS1562678", "tracking_urls": ["https://www.my-shipping-company.com?tracking=MS1562678"], "receipt": {}, "name": "#1001.2", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019873"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.message = "The package was shipped this morning.";
    fulfillment.notify_customer = false;
    fulfillment.tracking_info = {
      "number": "MS1562678",
      "url": "https://www.my-shipping-company.com?tracking=MS1562678"
    };
    fulfillment.line_items_by_fulfillment_order = [
      {
        "fulfillment_order_id": 1046000814
      }
    ];
    await fulfillment.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments.json',
      query: '',
      headers,
      data: { "fulfillment": {"message": "The package was shipped this morning.", "notify_customer": false, "tracking_info": {"number": "MS1562678", "url": "https://www.my-shipping-company.com?tracking=MS1562678"}, "line_items_by_fulfillment_order": [{"fulfillment_order_id": 1046000814}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_9', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"id": 1069019868, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:38-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:38-05:00", "tracking_company": "UPS", "shipment_status": null, "location_id": 24826418, "origin_address": null, "line_items": [{"id": 1071823206, "variant_id": 389013007, "title": "Crafty Shoes - Red", "quantity": 1, "sku": "crafty_shoes_red", "variant_title": "Small", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 910489600, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Crafty Shoes - Red - Small", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 0, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823206", "tax_lines": []}], "tracking_number": "1Z001985YW99744790", "tracking_numbers": ["1Z001985YW99744790"], "tracking_url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790", "tracking_urls": ["https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790"], "receipt": {}, "name": "#1001.2", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019868"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.message = "The package was shipped this morning.";
    fulfillment.notify_customer = false;
    fulfillment.tracking_info = {
      "number": "1Z001985YW99744790",
      "company": "UPS"
    };
    fulfillment.line_items_by_fulfillment_order = [
      {
        "fulfillment_order_id": 1046000811,
        "fulfillment_order_line_items": [
          {
            "id": 1072503316,
            "quantity": 1
          }
        ]
      }
    ];
    await fulfillment.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments.json',
      query: '',
      headers,
      data: { "fulfillment": {"message": "The package was shipped this morning.", "notify_customer": false, "tracking_info": {"number": "1Z001985YW99744790", "company": "UPS"}, "line_items_by_fulfillment_order": [{"fulfillment_order_id": 1046000811, "fulfillment_order_line_items": [{"id": 1072503316, "quantity": 1}]}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_10', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"id": 1069019875, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:42-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:42-05:00", "tracking_company": null, "shipment_status": null, "location_id": 24826418, "origin_address": null, "line_items": [{"id": 1071823214, "variant_id": 389013007, "title": "Crafty Shoes - Red", "quantity": 1, "sku": "crafty_shoes_red", "variant_title": "Small", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 910489600, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Crafty Shoes - Red - Small", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 0, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823214", "tax_lines": []}], "tracking_number": null, "tracking_numbers": [], "tracking_url": null, "tracking_urls": [], "receipt": {}, "name": "#1001.2", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019875"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.line_items_by_fulfillment_order = [
      {
        "fulfillment_order_id": 1046000815
      }
    ];
    await fulfillment.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments.json',
      query: '',
      headers,
      data: { "fulfillment": {"line_items_by_fulfillment_order": [{"fulfillment_order_id": 1046000815}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_11', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"tracking_company": "UPS", "location_id": 24826418, "id": 1069019869, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:15-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:39-05:00", "shipment_status": null, "origin_address": {"address1": "150 Elgin St", "city": "Ottawa", "zip": "K2P 1L4", "province_code": "ON", "country_code": "CA"}, "line_items": [{"id": 1071823207, "variant_id": 43729076, "title": "Draft", "quantity": 1, "sku": "draft-151", "variant_title": "151cm", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 108828309, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Draft - 151cm", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 1, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823207", "tax_lines": []}], "tracking_number": "1Z001985YW99744790", "tracking_numbers": ["1Z001985YW99744790"], "tracking_url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790", "tracking_urls": ["https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790"], "receipt": {}, "name": "#1001.1", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019869"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.id = 1069019869;
    await fulfillment.update_tracking({
      body: {"fulfillment": {"notify_customer": true, "tracking_info": {"company": "UPS", "number": "1Z001985YW99744790"}}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments/1069019869/update_tracking.json',
      query: '',
      headers,
      data: { "fulfillment": {"notify_customer": true, "tracking_info": {"company": "UPS", "number": "1Z001985YW99744790"}} }
    }).toMatchMadeHttpRequest();
  });

  it('test_12', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"tracking_company": null, "location_id": 24826418, "id": 1069019866, "order_id": 450789469, "status": "success", "created_at": "2025-04-02T11:38:15-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:37-05:00", "shipment_status": null, "origin_address": {"address1": "150 Elgin St", "city": "Ottawa", "zip": "K2P 1L4", "province_code": "ON", "country_code": "CA"}, "line_items": [{"id": 1071823203, "variant_id": 43729076, "title": "Draft", "quantity": 1, "sku": "draft-151", "variant_title": "151cm", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 108828309, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Draft - 151cm", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 1, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823203", "tax_lines": []}], "tracking_number": "1111", "tracking_numbers": ["1111"], "tracking_url": "http://www.my-url.com", "tracking_urls": ["http://www.my-url.com"], "receipt": {}, "name": "#1001.1", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019866"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.id = 1069019866;
    await fulfillment.update_tracking({
      body: {"fulfillment": {"notify_customer": true, "tracking_info": {"number": "1111", "url": "http://www.my-url.com"}}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments/1069019866/update_tracking.json',
      query: '',
      headers,
      data: { "fulfillment": {"notify_customer": true, "tracking_info": {"number": "1111", "url": "http://www.my-url.com"}} }
    }).toMatchMadeHttpRequest();
  });

  it('test_13', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"fulfillment": {"order_id": 450789469, "status": "cancelled", "location_id": 24826418, "id": 1069019879, "created_at": "2025-04-02T11:38:15-05:00", "service": "manual", "updated_at": "2025-04-02T11:38:45-05:00", "tracking_company": "UPS", "shipment_status": null, "origin_address": {"address1": "150 Elgin St", "city": "Ottawa", "zip": "K2P 1L4", "province_code": "ON", "country_code": "CA"}, "line_items": [{"id": 1071823217, "variant_id": 43729076, "title": "Draft", "quantity": 1, "sku": "draft-151", "variant_title": "151cm", "vendor": "Birthday Present Factory", "fulfillment_service": "manual", "product_id": 108828309, "requires_shipping": true, "taxable": true, "gift_card": false, "name": "Draft - 151cm", "variant_inventory_management": null, "properties": [], "product_exists": true, "fulfillable_quantity": 1, "grams": 0, "price": "10.00", "total_discount": "0.00", "fulfillment_status": "fulfilled", "price_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "discount_allocations": [], "duties": [], "admin_graphql_api_id": "gid://shopify/LineItem/1071823217", "tax_lines": []}], "tracking_number": "#\u26201\u2622\n---\n4321\n", "tracking_numbers": ["#\u26201\u2622\n---\n4321\n"], "tracking_url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=#\u26201\u2622---4321", "tracking_urls": ["https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=#\u26201\u2622---4321"], "receipt": {}, "name": "#1001.1", "admin_graphql_api_id": "gid://shopify/Fulfillment/1069019879"}}));

    const fulfillment = new shopify.rest.Fulfillment({session: session});
    fulfillment.id = 1069019879;
    await fulfillment.cancel({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/fulfillments/1069019879/cancel.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

});
