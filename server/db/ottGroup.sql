create table ottGroup(
id int(11) auto_increment primary key,
title varchar(200) not null,
classification varchar(20) not null,
notice text,
account varchar(100),
ott_id varchar(20),
ott_pwd varchar(20),
term int(11),
start_date datetime,
end_date datetime,
max_member_num int(4),
created timestamp default now());