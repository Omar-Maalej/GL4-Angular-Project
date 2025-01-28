import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { AdminService } from '../../../services/admin.service';
import { Stats } from '../../../models/stats';

@Component({
  selector: 'app-admin-dashboard',
  imports: [BaseChartDirective],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
})
export class AdminDashboardComponent implements OnInit {
  stats: Stats | null = null;
  loading: WritableSignal<boolean> = signal(true);

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333', // Legend text color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;
            return `${value} items`; // Display "items" for context
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
          color: '#666',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          color: '#666',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
          color: '#666',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          stepSize: 1, // Ensures integer counts are displayed
          color: '#666',
        },
      },
    },
  };

  public barChartLabels: string[] = [
    'Admins',
    'Normal Users',
    'Total Products',
    'Pending Posts',
    'Approved Posts',
  ];

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [], // Data populated dynamically
        label: 'Counts',
        backgroundColor: [
          '#4CAF50',
          '#FFC107',
          '#2196F3',
          '#FF5722',
          '#9C27B0',
        ],
        hoverBackgroundColor: [
          '#4CAF50CC',
          '#FFC107CC',
          '#2196F3CC',
          '#FF5722CC',
          '#9C27B0CC',
        ],
      },
    ],
  };

  public pieChartData: ChartData<'pie'> = {
    labels: ['Pending Posts', 'Approved Posts', 'Rejected Posts'],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384CC', '#36A2EBCC', '#FFCE56CC'],
        borderWidth: 1,
        borderColor: '#FFFFFF',
      },
    ],
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getStats().subscribe((stats: Stats) => {
      this.stats = stats;
      this.updateChartData(stats);
      console.log(stats);
      this.loading.set(false);
    });
  }

  private updateChartData(stats: Stats): void {
    this.barChartData.datasets[0].data = [
      stats.admins,
      stats.normal_users,
      stats.products,
      stats.pending_posts,
      stats.approved_posts,
    ];

    this.pieChartData.datasets[0].data = [
      stats.pending_posts,
      stats.approved_posts,
      stats.posts,
    ];
    console.log(this.pieChartData);
  }
}
