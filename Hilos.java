import java.awt.BorderLayout;


import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JProgressBar;
import java.awt.Label;
import javax.swing.JLabel;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Hilos extends JFrame implements ActionListener {

	private JPanel contentPane;
	private JLabel lblUno;
	private JProgressBar uno;
	private JButton btnEjecutar;
	private Threads Hilo;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Hilos frame = new Hilos();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Hilos() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		uno = new JProgressBar();
		uno.setBounds(102, 54, 307, 39);
		contentPane.add(uno);
		
		Label lblUno = new Label("barra uno");
		lblUno.setBounds(10, 54, 62, 22);
		contentPane.add(lblUno);
		
		
	 btnEjecutar = new JButton("Ejecutar");
		btnEjecutar.addActionListener(this);
		btnEjecutar.setBounds(178, 150, 89, 23);
		contentPane.add(btnEjecutar);
	}
@Override
public void actionPerformed(ActionEvent e)
{
	if(e.getSource()== btnEjecutar)
	{
		Hilo = new Threads(uno,"Uno");
		Hilo.start();
	}
}
}
