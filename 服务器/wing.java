package tcp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class wing {
	public static void main(String[] args) throws IOException {
		int i=0;
		String s = "";
		Connection conn;
		PreparedStatement stmt;
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://";//服务器地址和数据库名
		String user = "";//用户名
		String password = "";//密码
		String sql = "insert into monitor values (?,?,?,?,?)";

		try {
			Socket sock = new Socket("115.29.240.46", 9000);// 创建Socket对象,地址与端口要对应服务器的值
			// 对Socket的输入流进行包装
			System.out.println("ok");
			PrintWriter writer = new PrintWriter(sock.getOutputStream());
			writer.print("");//注册包 每个账户不同
			writer.flush();

			while (true) {
				BufferedReader in = new BufferedReader(new InputStreamReader(sock.getInputStream()));
				s = in.readLine();
				if (s != null) {
					System.out.println(s);
					String t=null;
					if(s.substring(0,1).equals("["))
						t = s.substring(10);
					else
						t=s;
			        String[] r = t.split("  ");
			        String[] th = r[0].split("/");
			        System.out.println(th[0]);
			        System.out.println(th[1]);
			        System.out.println(r[1]);
			        System.out.println(r[2]);
			        System.out.println("=============");
			        try {
						Class.forName(driver);
						conn = DriverManager.getConnection(url, user, password);
						stmt = (PreparedStatement) conn.prepareStatement(sql);
						stmt.setInt(1, Integer.parseInt(th[0]));
						stmt.setInt(2, Integer.parseInt(th[1]));
						stmt.setFloat(3,Float.parseFloat(r[1]));
						stmt.setInt(4, Integer.parseInt(r[2]));
						
						SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
				       // System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
				        
				        stmt.setString(5,df.format(new Date()));
						stmt.executeUpdate();
						i++;
						
					} catch (ClassNotFoundException e) {
						// TODO 自动生成的 catch 块
						e.printStackTrace();
					} catch (SQLException e) {
						// TODO 自动生成的 catch 块
						e.printStackTrace();
					}


				}
			}
		} catch (IOException e) {
			System.out.println("error!");
		}
		System.out.println("end");

	}
}
