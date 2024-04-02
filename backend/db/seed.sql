USE smartphones
INSERT INTO
    phones (name, brand, model, price, color)
VALUES
    (
        'Xiaomi Redmi 9',
        'Xiaomi',
        'Redmi 9',
        1449.99,
        'red'
    ),
    (
        'Iphone 14 Pro',
        'Iphone',
        '14 Pro',
        10050.99,
        'silver'
    ),
    ('Iphone 14', 'Iphone', '14', 4050.99, 'silver');

INSERT INTO
    sales (phone_id, sale_date, quantity, total_price)
VALUES
    (1, '2024-04-01', 2, 2899.98),
    (2, '2024-04-02', 1, 10050.99);