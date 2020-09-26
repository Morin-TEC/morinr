package ventanaswing;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JTextArea;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JScrollPane;

public class Fibonacci extends JFrame {

	private JPanel contentPane;
	private JTextField txtValorInicial;
	private JTextField txtValorFinal;
	private JTextField txtIteraciones;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Fibonacci frame = new Fibonacci();
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
	public Fibonacci() {
		setTitle("Secuencia");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 467, 244);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Valor inicial");
		lblNewLabel.setBounds(10, 25, 88, 34);
		contentPane.add(lblNewLabel);
		
		JLabel lblValorFinal = new JLabel("Valor final");
		lblValorFinal.setBounds(10, 70, 88, 34);
		contentPane.add(lblValorFinal);
		
		JLabel lblcuntasIteraciones = new JLabel("\u00BFCu\u00E1ntas iteraciones?");
		lblcuntasIteraciones.setBounds(10, 112, 110, 34);
		contentPane.add(lblcuntasIteraciones);
		
		txtValorInicial = new JTextField();
		txtValorInicial.setBounds(172, 32, 86, 20);
		contentPane.add(txtValorInicial);
		txtValorInicial.setColumns(10);
		
		txtValorFinal = new JTextField();
		txtValorFinal.setBounds(172, 77, 86, 20);
		txtValorFinal.setColumns(10);
		contentPane.add(txtValorFinal);
		
		txtIteraciones = new JTextField();
		txtIteraciones.setBounds(172, 119, 86, 20);
		txtIteraciones.setColumns(10);
		contentPane.add(txtIteraciones);
		
		JLabel lblNewLabel_1 = new JLabel("Secuencia");
		lblNewLabel_1.setBounds(336, 11, 82, 14);
		contentPane.add(lblNewLabel_1);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(310, 32, 108, 148);
		contentPane.add(scrollPane);
		
				
				JTextArea txtSucesion = new JTextArea();
				scrollPane.setViewportView(txtSucesion);
		
		JButton btnNewButton = new JButton("Crear secuencia");
		btnNewButton.setBounds(71, 155, 150, 23);
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				txtSucesion.setEditable(false);
				int valorinicial = Integer.parseInt(txtValorInicial.getText());
				int valorfinal = Integer.parseInt(txtValorFinal.getText());
				int iteraciones = Integer.parseInt(txtIteraciones.getText());
				int auxiliar = 0;
				txtSucesion.setText("Sucesion");
				for(int i = 1; i <= iteraciones; i++)
		        {
		            valorfinal = auxiliar;
		            auxiliar = valorinicial + auxiliar;
		            valorinicial = valorfinal;
					txtSucesion.setText(txtSucesion.getText() + "\n" + valorinicial);
		        }
			}
		});
		contentPane.add(btnNewButton);
	}
}
