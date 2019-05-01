package testdemo.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.Socket;


@RestController
@RequestMapping(value = "/SWMS")
public class Controller {
    @RequestMapping(value = "/read")
    public Object read() {//@RequestParam String text
        String s = "";
        FileOutputStream fos = null;
        try {
            Socket sock = new Socket("115.29.240.46", 9000);// 创建Socket对象,地址与端口要对应服务器的值
            //Socket sock = new Socket("192.168.246.2", 9999);// 创建Socket对象,地址与端口要对应服务器的值
            // 对Socket的输入流进行包装
            System.out.println("ok");
            PrintWriter writer=new PrintWriter(sock.getOutputStream());
            writer.print("ep=W87SWLK3ZPWMRN2Y&pw=123456");
            writer.flush();

            BufferedReader in = new BufferedReader(new InputStreamReader(sock
                    .getInputStream()));

            s = in.readLine();
            in.close();
            writer.close(); //关闭Socket输出流
        } catch (IOException e) {
            System.out.println("error!");
        }
        System.out.println("end");
        return s;
    }

    @RequestMapping(value = "/send")
        public Object send(@RequestParam String num) {

        try{
            Socket socket =new Socket("115.29.240.46",9000);
            //Socket socket = new Socket("192.168.246.2", 9999);

            OutputStream outputStream=socket.getOutputStream();
            PrintWriter printWriter =new PrintWriter(outputStream);
            printWriter.print("ep=W87SWLK3ZPWMRN2Y&pw=123456");
            printWriter.flush();
            InputStream inputStream =socket.getInputStream();
            byte b[]=new byte[1024];
            int i=inputStream.read(b);
            String str=new String(b).trim();
            System.out.println(str.length());
            System.out.println(i);
            while(i!=-1)
            {
                if(str.equals("[iotxx:ok]"))//
                {
                    printWriter.print(num);break;
                }
            }
            System.out.print("sendMessage0 ok");
            printWriter.flush();
            inputStream.close();
            //response.getWriter().append("Served at: ").append(request.getContextPath());

    } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
        return num;
    }
}
