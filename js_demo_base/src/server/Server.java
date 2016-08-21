package server;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.URLDecoder;

public class Server {
	public static void main(String[] args) throws IOException {
		ServerSocket serverSocket = new ServerSocket(9999);
		while (true)
			new Thread(new ServerRunnable(serverSocket.accept())).start();
	}
}

class ServerRunnable implements Runnable {

	private Socket socket;

	public ServerRunnable(Socket socket) {
		this.socket = socket;
	}

	public void run() {
		try {
			InputStream in = socket.getInputStream();

			byte[] buf = new byte[1024 * 10];
			int len = in.read(buf);
			String request = new String(buf, 0, len);

			String content = request.substring(request.indexOf("\r\n\r\n") + 4); // 找到2次回车的位置, 截取后面的字符串

			String username = getParameter(content, "username");
			String password = getParameter(content, "password");
			String gender = getParameter(content, "gender");
			String interest = getParameter(content, "interest");
			String city = getParameter(content, "city");
			String file = getParameter(content, "file");

			String response = null;

			if (username == null || "".equals(username))
				response = "用户名不能为空";
			else if (password == null || "".equals(password))
				response = "密码不能为空";
			else if (gender == null || "".equals(gender))
				response = "性别必须选择";
			else if (interest == null || "".equals(interest))
				response = "兴趣必须选择";
			else if (city == null || "".equals(city))
				response = "城市必须选择";
			else if (file == null || "".equals(file))
				response = "头像必须上传";
			else
				response = "注册成功";

			OutputStream out = socket.getOutputStream();
			Writer writer = new OutputStreamWriter(out);
			writer.write("<html>");
			writer.write("<head>");
			writer.write("</head>");
			writer.write("<body>");
			writer.write(("<font color=" + (response.equals("注册成功") ? "green" : "red") + " size=7>"));
			writer.write(response);
			writer.write("</font><br><br>");
			writer.write("用户名: " + (username == null ? null : URLDecoder.decode(username, "GBK")) + "<br>");
			writer.write("密码: " + (password == null ? null : URLDecoder.decode(password, "GBK")) + "<br>");
			writer.write("性别: " + (gender == null ? null : URLDecoder.decode(gender, "GBK")) + "<br>");
			writer.write("兴趣: " + (interest == null ? null : URLDecoder.decode(interest, "GBK")) + "<br>");
			writer.write("城市: " + (city == null ? null : URLDecoder.decode(city, "GBK")) + "<br>");
			writer.write("头像: " + (file == null ? null : URLDecoder.decode(file, "GBK")) + "<br>");
			writer.write("</body>");
			writer.write("</html>");
			writer.close();

			System.out.println(socket.getInetAddress().getHostAddress() + ":" + socket.getPort());
			System.out.println("用户名: " + (username == null ? null : URLDecoder.decode(username, "GBK")));
			System.out.println("密码: " + (password == null ? null : URLDecoder.decode(password, "GBK")));
			System.out.println("性别: " + (gender == null ? null : URLDecoder.decode(gender, "GBK")));
			System.out.println("兴趣: " + (interest == null ? null : URLDecoder.decode(interest, "GBK")));
			System.out.println("城市: " + (city == null ? null : URLDecoder.decode(city, "GBK")));
			System.out.println("头像: " + (file == null ? null : URLDecoder.decode(file, "GBK")));
			System.out.println();

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				socket.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	private String getParameter(String content, String name) {
		String[] params = content.split("&"); // 将请求内容以&分割, 获得字符串数组, 其中是每一个键值对
		StringBuilder sb = new StringBuilder();
		for (String entry : params)
			if (entry.split("=")[0].equals(name)) // 判断每一个entry, 如果等号前面和name相同
				sb.append(entry.substring(entry.indexOf("=") + 1) + ", ");	 // 添加等号后面的字符
		return sb.length() == 0 ? null : sb.delete(sb.length() - 2, sb.length()).toString();
		// return null; // 遍历所有键值对结束之后, 如果没有找到要查的name, 返回null
	}
}