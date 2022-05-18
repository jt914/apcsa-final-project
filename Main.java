
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.awt.geom.AffineTransform;
import java.io.BufferedInputStream;
import java.io.File;
import java.awt.image.BufferedImage;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.swing.*;

public class Main extends JPanel implements ActionListener {
    private static int travel = 0;
    
    public Main(){
        setBackground(Color.white);
    }

    public static void rePaint(){
        setBackground(Color.white);

    }
    

    public void paintComponent(Graphics g){


        System.out.println("wasd");
        super.paintComponent(g);
        File Road = new File("road.png");
        File Car = new File("car.png");
        try {
            g.drawImage(ImageIO.read(Road), 0, 0, Constants.SCREENWIDTH, Constants.SCREENHEIGHT, null);
            g.drawImage(ImageIO.read(Car), (Constants.SCREENWIDTH - ImageIO.read(Car).getWidth()-travel), Constants.SCREENHEIGHT-ImageIO.read(Car).getHeight()+20, null);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        travel-=10;

    }
    /*        System.out.println("wasd");
        super.paintComponent(g);
        File Road = new File("road.png");
        try {
            BufferedImage roadImg = ImageIO.read(Road);
            g.drawImage(File.read, x, y, observer)
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }*/



    public static void main(String[] args) throws IOException{
        JFrame frame = new JFrame("Parking Simulator");
		frame.setSize(Constants.SCREENWIDTH, Constants.SCREENHEIGHT);
		frame.setLocation(0, 0);
		frame.setResizable(true);
        frame.add(new Main());
        while(travel<=500){
            this.repaint();
        }
		frame.setVisible(true);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        

    }



    @Override
    public void actionPerformed(ActionEvent e) {
        // TODO Auto-generated method stub
        
    }
}
