package cn.test.json;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;

import com.google.gson.Gson;

public class TestJson {

	@Test
	public void test01() throws JSONException {
		String jsonContent = "{'hello': 'world', 'abc': 'xyz'}";

		JSONObject jsonObject = new JSONObject(jsonContent);

		String str1 = jsonObject.getString("hello");
		String str2 = jsonObject.getString("abc");

		System.out.println(str1);
		System.out.println(str2);

		System.out.println("--------------------");

	}

	@Test
	public void test02() throws JSONException {
		String jsonContent = "[{'hello': 333, 'abc': false, 'xyz': {'a': 1, 'b': 'ab'}}, {'hello': 555, 'abc': true, 'xyz': {'a': 3, 'b': 'ba'}}]";

		JSONArray jsonArray = new JSONArray(jsonContent);

		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject jsonObject2 = jsonArray.getJSONObject(i);

			int value1 = jsonObject2.getInt("hello");
			boolean value2 = jsonObject2.getBoolean("abc");
			// String value3 = jsonObject2.getString("xyz");

			JSONObject jsonObject3 = jsonObject2.getJSONObject("xyz");

			int value3 = jsonObject3.getInt("a");
			String value4 = jsonObject3.getString("b");

			System.out.println(value1);
			System.out.println(value2);
			System.out.println(value3);
			System.out.println(value4);
		}

	}

	@Test
	public void test03() {
		Person person = new Person();

		person.setUsername("zhangsan");
		person.setPassword("123456");
		person.setAddress("beijing");
		person.setAge(30);

		person.getList().add("hello");
		person.getList().add("world");
		person.getList().add("hello world");

		Gson gson = new Gson();

		String result = gson.toJson(person);

		System.out.println(result);
	}

	@Test
	public void test04() {

	}
}
