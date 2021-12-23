CREATE TABLE users (
    id INT(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(32) NOT NULL,
    age INT(3),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO users (name,age) VALUES ('鈴木一郎',20);
INSERT INTO users (name,age) VALUES ('山本ヤス',27);
INSERT INTO users (name,age) VALUES ('山田太郎',18);
INSERT INTO users (name,age) VALUES ('山田花子',17);
INSERT INTO users (name,age) VALUES ('東京二郎',30);
INSERT INTO users (name,age) VALUES ('大阪三郎',33);
