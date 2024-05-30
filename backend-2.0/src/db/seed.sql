USE smartphones
INSERT INTO
    phones (name, brand, model, price, color, img)
VALUES
    (
        'iPhone 15',
        'iPhone',
        '15',
        7299,
        'red',
        'https://www.apple.com/v/iphone-se/k/images/overview/shared-compare/compare_iphone_15__ec252ez418ae_small_2x.png'
    ),
    (
        'iPhone 15',
        'iPhone',
        '15',
        7299,
        'black',
        'https://www.apple.com/v/iphone-se/k/images/overview/shared-compare/compare_iphone_15__ec252ez418ae_small_2x.png'
    ),
    (
        'iPhone 15',
        'iPhone',
        '15',
        7299,
        'white',
        'https://www.apple.com/v/iphone-se/k/images/overview/shared-compare/compare_iphone_15__ec252ez418ae_small_2x.png'
    ),
    (
        'iPhone 15',
        'iPhone',
        '15',
        7299,
        'blue',
        'https://www.apple.com/v/iphone-se/k/images/overview/shared-compare/compare_iphone_15__ec252ez418ae_small_2x.png'
    ),
    (
        'iPhone 15 Pro',
        'iPhone',
        '15 Pro',
        9299,
        'silver',
        'https://www.apple.com/v/iphone-se/k/images/overview/shared-compare/compare_iphone_15_pro__evzkamqr8rsm_small_2x.png'
    ),
    (
        'Iphone 14',
        'Iphone',
        '14',
        5999,
        'blue',
        'https://www.apple.com/v/iphone-se/k/images/overview/shared-compare/compare_iphone_14__eeblt4putp26_small_2x.png'
    );

INSERT INTO
    sales (phone_id, sale_date, quantity, total_price)
VALUES
    (1, '2024-04-01', 2, 2899.98),
    (2, '2024-04-02', 1, 10050.99);

INSERT INTO
    users (name, email, password_hash, address, phone)
VALUES
    (
        'Admin',
        'admim@email.com',
        'admim123',
        NULL,
        NULL
    );