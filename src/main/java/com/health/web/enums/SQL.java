package com.health.web.enums;

public enum SQL {
	CREATE_USERS, DROP_USERS, TRUNCATE_USERS,
	CREATE_ROUTINE, DROP_ROUTINE, TRUNCATE_ROUTINE,
	CREATE_ARTICLE, DROP_ARTICLE, TRUNCATE_ARTICLE;
	
	@Override
	public String toString() {
		//userid, passwd, uname, age, gender, height, weight, fat, muscle
		String result = "";
		switch (this) {
		case CREATE_USERS:
			result = "CREATE TABLE USERS("
					+ "USERID VARCHAR(30) PRIMARY KEY COMMENT '사용자아이디',"
					+ "PASSWD VARCHAR(30) COMMENT '비밀번호',"
					+ "UNAME VARCHAR(20) COMMENT '사용자이름',"
					+ "AGE VARCHAR(10) COMMENT '나이',"
					+ "GENDER VARCHAR(10) COMMENT '성별',"
					+ "HEIGHT VARCHAR(20) COMMENT '키',"
					+ "WEIGHT VARCHAR(20) COMMENT '몸무게',"
					+ "FAT VARCHAR(20) COMMENT '체지방량',"
					+ "MUSCLE VARCHAR(20) COMMENT '근골격량')";
			break;
		case DROP_USERS : 
			result = "DROP TABLE USERS";
			break;
		case TRUNCATE_USERS : 
			result = "TRUNCATE TABLE USERS";
			break;
		}
		return result;
	}
}
